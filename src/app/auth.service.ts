import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isLoggedIn(): boolean {
    return true;
  }
}
