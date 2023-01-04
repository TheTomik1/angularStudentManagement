import { Component } from '@angular/core';

import data from '../users.json';

@Component({
  selector: 'login-page',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css'],
})
export class LoginPage {
  userNickname: string = '';
  userPassword: string = '';
  json: any = data;

  verifyLogin(): void {
    console.log(this.json);

    Object.keys(this.json).forEach((user) => {
      console.log(user)

      if (user == this.userNickname) {
        if (this.userPassword == this.json[user]) {
          console.log('Logged in');
        }
      }
    });
  }
}
