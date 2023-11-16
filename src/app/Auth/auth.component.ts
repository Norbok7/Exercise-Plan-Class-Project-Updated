import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, IAuthResData } from './auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  // * Properties
  isSignInMode = true;
  errorMsg: string | null = null;
  authObsv: Observable<IAuthResData>;

  // * Constructor
  constructor(private authService: AuthService, private router: Router) {}

  // * Methods
  onAuthSubmit(form: NgForm) {

    // Descructure
    const { email, password } = form.value;

    if (!form.valid || !email || !password) return; // TODO: Better validations

    // Conditional based on isSignInMode value
    if (this.isSignInMode) {
      // Logic to Sign In
      this.authObsv = this.authService.signInWithEmailPassword({
        email,
        password,
      });
    } else {
      // Logic to Sign Up
      this.authObsv = this.authService.signUpWithEmailPassword({
        email,
        password,
      });
    }

    this.authObsv.subscribe({
      next: (data) => {
        console.log(data);

        this.router.navigate(['exercise-difficulty']);
      },
      error: (res: HttpErrorResponse) => {
        console.log(res);
        this.errorMsg = res?.error?.error?.message || 'Something went wrong!';
      },
      complete: () => {
        console.log('Complete!');

        // Reset the Form
        form.reset();
      },
    });
  }

  toggleAuthMode() {
    this.isSignInMode = !this.isSignInMode;
  }
}
