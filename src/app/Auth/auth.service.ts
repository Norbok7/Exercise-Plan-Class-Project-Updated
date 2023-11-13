import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments.development';
// * Constants
const FIREBASE_WEB_API_KEY = environment.firebaseApiKey;
const FIREBASE_SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_WEB_API_KEY}`;
const FIREBASE_SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_WEB_API_KEY}`;

// * Types / Interfaces
export interface IAuthReqData {
  email: string; // The email for the user to create.
  password: string; // The password for the user to create.
  returnSecureToken?: boolean; // Whether or not to return an ID and refresh token. Should always be true.
}

export interface IAuthResData {
  kind: string; // A Firebase Auth ID token for the newly created user.
  idToken: string; // A Firebase Auth ID token for the newly created user.
  email: string; // The email for the newly created user.
  refreshToken: string; // A Firebase Auth refresh token for the newly created user.
  expiresIn: string; // The number of seconds in which the ID token expires.
  localId: string; // The uid of the newly created user.
  registered?: boolean; // Whether the email is for an existing account.
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // * Properties
  currUser = new BehaviorSubject<User | null>(null);
  private tokenExpTimer: any;

  // * Constructor
  constructor(private http: HttpClient, private router: Router) {}

  // * Methods
  signUpWithEmailPassword(authData: IAuthReqData) {
    // Validations
    if (!authData.email || !authData.password) return; // TODO: Better validations

    // Logic to Sign Up
    const authRes = this.http
      .post<IAuthResData>(FIREBASE_SIGN_UP_URL, {
        ...authData,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          // Descructure
          const { email, localId, idToken, expiresIn } = res;

          // Create a new user
          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );

    return authRes;
  }

  signInWithEmailPassword(authData: IAuthReqData) {
    // Validations
    if (!authData.email || !authData.password) return; // TODO: Better validations

    // Logic to Sign In
    const authRes = this.http
      .post<IAuthResData>(FIREBASE_SIGN_IN_URL, {
        ...authData,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          // Descructure
          const { email, localId, idToken, expiresIn } = res;

          // Create a new user
          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );

    return authRes;
  }

  signOut() {
    this.currUser.next(null);
    this.router.navigate(['auth']);
  }

  autoSignInFromLocalStorage() {
    // Get the user data from localStorage
    const userData = localStorage.getItem('userData');

    // If there is no user data, return
    if (!userData) return;

    // Convert the user data to a JS object
    const lsUser: {
      id: string;
      email: string;
      _token: string;
      _tokenExpDate: string;
    } = JSON.parse(userData);

    // Create a new user
    const newUser = new User(
      lsUser.id,
      lsUser.email,
      lsUser._token,
      new Date(lsUser._tokenExpDate)
    );

    // Emit the new user
    if (newUser.token) {
      this.currUser.next(newUser); // Set the current user

      // Set the Auto-Logout Timer
      const expDuration =
        new Date(lsUser._tokenExpDate).getTime() - new Date().getTime();
      this.autoSignOut(expDuration); // Convert to milliseconds
    }
  }

  autoSignOut(expDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.signOut();
    }, expDuration);
  }

  // ~ Helpers ~
  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    // Create Expiration Date for Token
    const expDate = new Date(new Date().getTime() + expiresIn * 1000); // Convert to milliseconds

    console.log('expDate:', expDate);

    // Create new user based on form data
    const newUser = new User(userId, email, token, expDate);

    // Emit the new user
    this.currUser.next(newUser);

    // Set the Auto-Logout Timer
    this.autoSignOut(expiresIn * 1000); // Convert to milliseconds

    // Store the user in localStorage
    localStorage.setItem('userData', JSON.stringify(newUser));
  }
}
