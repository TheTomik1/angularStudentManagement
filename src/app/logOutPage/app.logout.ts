import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { LoginPage } from '../logInPage/app.login';

@Component({
  selector: 'logout-page',
  templateUrl: './app.logout.html',
  styleUrls: ['./app.logout.css'],
})
export class LogoutPage {
  constructor(private loginPage: LoginPage, private router: Router, private authService: AuthService) {}

  processLogOut(agreedStatus: boolean): void {
    if (agreedStatus == true) {
      this.authService.logOut();
      this.router.navigate(['']);
    } else if (agreedStatus == false) {
      this.loginPage.sendToUserPage(this.loginPage.userNickname);
    }
  }
}
