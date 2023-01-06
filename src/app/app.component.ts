import { Component } from '@angular/core';

import { LoginPage } from './logInPage/app.login';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private loginPage: LoginPage) {}

  handleLoginPage = this.loginPage.handleLoginPage;
  handleLogOutPage = this.loginPage.handleLogOutPage;
  userNickname = this.loginPage.userNickname;
  userStatus = this.loginPage.userStatus;
}
