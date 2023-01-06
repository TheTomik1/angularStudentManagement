import { Component } from '@angular/core';

import { LoginPage } from './logInPage/app.login';

import userData from './users.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private LoginPage: LoginPage) {}

  handleLoginPage = this.LoginPage.handleLoginPage;
  handleLogOutPage = this.LoginPage.handleLogOutPage;
  userNickname = this.LoginPage.userNickname;
  userStatus = this.LoginPage.userStatus;
}
