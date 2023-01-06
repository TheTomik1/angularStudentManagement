import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginPage } from '../logInPage/app.login';

@Component({
  selector: 'logout-page',
  templateUrl: './app.logout.html',
  styleUrls: ['./app.logout.css'],
})
export class LogoutPage {
  constructor(private loginPage: LoginPage, private router: Router) {}

  processLogOut(agreedStatus: boolean): void {
    if (agreedStatus == true) {
      this.router.navigate(['']);
      this.loginPage.handleLogOutPage = "nav-item nav-link disabled";
      this.loginPage.userStatus = "Currently you are not logged in";
    } else if (agreedStatus == false) {
      this.router.navigate(["user", this.loginPage.userNickname]);
    }
  }
}
