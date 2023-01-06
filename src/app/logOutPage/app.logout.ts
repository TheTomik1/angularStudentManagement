import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginPage } from '../logInPage/app.login';

@Component({
  selector: 'logout-page',
  templateUrl: './app.logout.html',
  styleUrls: ['./app.logout.css'],
})
export class LogoutPage {
  constructor(private LoginPage: LoginPage ,private router: Router) {}

  processLogOut(agreedStatus: boolean): void {
    if (agreedStatus == true) {
      this.router.navigate(['']);
      this.LoginPage.handleLogOutPage = "nav-item nav-link disabled";
      this.LoginPage.userStatus = "Currently you are not logged in";
      this.LoginPage.loginFormView = true;
    } else if (agreedStatus == false) {
      this.router.navigate(["user", this.LoginPage.userNickname]);
    }
  }
}
