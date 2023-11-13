export class User {
  // * Constructor
  constructor(
    public id: string,
    public email: string,
    private _token: string,
    private _tokenExpDate: Date
  ) {}

  // * Methods
  public get token() {
    // Validation to ensure we have an expirationd ate & it's not past today
    if (!this._tokenExpDate || new Date() > this._tokenExpDate) return null;

    return this._token; // Return the token
  }
}
