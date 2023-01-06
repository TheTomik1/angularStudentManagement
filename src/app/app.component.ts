import { Component } from '@angular/core';
import { Router } from '@angular/router';

import userData from './users.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  userEmail: string = '';
  userPassword: string = '';
  userNickname: string = '';
  handleLoginPage: string = 'nav-item nav-link';
  handleLogOutPage: string = 'nav-item nav-link disabled';
  userStatus: string = "Currently you are not logged in";
  loginFormView: boolean = true;
  usersJson: any = userData;

  sendToUserPage(getUserName: string): void {
    this.router.navigate(['user', getUserName]);
  }

  handleFormView(): void {
    this.loginFormView = !this.loginFormView;
  }

  verifyLoginForm(): void {
    if (this.userEmail.length == 0) {
    }
    if (this.userPassword.length == 0) {
    }

    Object.keys(this.usersJson).forEach((user) => {
      if (user == this.userEmail) {
        if (this.userPassword == this.usersJson[user][0]) {
          this.userNickname = this.usersJson[user][1];
          this.sendToUserPage(this.userNickname);
          this.handleLoginPage = 'nav-item nav-link disabled';
          this.handleLogOutPage = 'nav-item nav-link';
          this.userStatus = `Logged in as: ${this.userNickname}`;
          this.handleFormView();
        }
      }
    });
  }
}
