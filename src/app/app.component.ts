import { Component } from '@angular/core';
import { Router } from '@angular/router';

import data from './users.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  handleLogOutPage: string = 'nav-item nav-link disabled';
  userEmail: string = '';
  userPassword: string = '';
  userNickname: string = '';
  userLogged = false;
  userJson: any = data;

  constructor(private router: Router) {}

  sendToUserPage(getUserName: string): void {
    this.router.navigate(['user', getUserName]);
  }

  verifyLoginForm(): void {
    if (this.userEmail.length == 0) {
    }
    if (this.userPassword.length == 0) {
    }

    Object.keys(this.userJson).forEach((user) => {
      if (user == this.userEmail) {
        if (this.userPassword == this.userJson[user][0]) {
          this.userNickname = this.userJson[user][1];
          this.sendToUserPage(this.userNickname);
          this.handleLogOutPage = 'nav-item nav-link';
          this.userLogged = true;
        }
      }
    });
  }
}
