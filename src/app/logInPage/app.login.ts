import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorage } from '../localStorage';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css'],
})
export class LoginPage {
  constructor(private router: Router, private localStorage: LocalStorage, private authService: AuthService) {}

  userEmail: string = '';
  userPassword: string = '';
  userNickname: string = '';

  sendToUserPage(getUserName: string): void {
    this.router.navigate(['user', getUserName]);
  }

  verifyLoginForm(): void {
    if (this.userEmail.length == 0) {
      alert("Email field cannot be empty.");
    }
    if (this.userPassword.length == 0) {
      alert("Password field cannot be empty.");
    }

    try {
      const getUserData: Array<string> = this.localStorage.getData(this.userEmail).split(',');
      if (getUserData[0] == this.userPassword) {
        this.authService.login();
        this.userNickname = getUserData[1];
        this.sendToUserPage(this.userNickname);
      } else {
        alert("Account found, but wrong password provided. Make sure to check your spelling.")
      }
    } catch (TypeError) {
      alert("Account not found. Make sure to check your spelling.")
    }
  }
}
