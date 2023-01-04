import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import data from '../users.json';

@Component({
  selector: 'login-page',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css'],
})
export class LoginPage {
  userEmail: string = '';
  userPassword: string = '';
  userNickname: string = '';
  userLogged = false;
  userJson: any = data;

  constructor(private router: Router) {}

  sendToUserPage(getUserName: string): void {
    this.router.navigate(["user", getUserName])
  }

  verifyLogin(): void {
    if (this.userEmail.length == 0) {
    }
    if (this.userPassword.length == 0) {
    }

    Object.keys(this.userJson).forEach((user) => {
      if (user == this.userEmail) {
        if (this.userPassword == this.userJson[user][0]) {
          this.userNickname = this.userJson[user][1];
          this.sendToUserPage(this.userNickname);
        }
      }
    });
  }
}
