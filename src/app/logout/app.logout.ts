import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';

@Component({
  selector: 'logout-page',
  templateUrl: './app.logout.html',
  styleUrls: ['./app.logout.css'],
})
export class LogoutPage {
  constructor(private AppComponent: AppComponent ,private router: Router) {}

  processLogOut(agreedStatus: boolean): void {
    if (agreedStatus == true) {
      this.router.navigate(['']);
      this.AppComponent.handleLogOutPage = "nav-item nav-link disabled";
      this.AppComponent.userStatus = "Currently you are not logged in";
      this.AppComponent.loginFormView = true;
    } else if (agreedStatus == false) {
      this.router.navigate(["user", this.AppComponent.userNickname]);
    }
  }
}
