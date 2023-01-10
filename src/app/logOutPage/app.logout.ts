import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'logout-page',
  templateUrl: './app.logout.html',
  styleUrls: ['./app.logout.css'],
})
export class LogoutPage {
  constructor(private appComponent: AppComponent, private router: Router, private authService: AuthService) {}

  processLogOut(agreedStatus: boolean): void {
    if (agreedStatus == true) {
      this.authService.logOut();
      this.appComponent.userEmail = '';
      this.appComponent.userPassword = '';
      this.router.navigate(['']);
    } else if (agreedStatus == false) {
      this.appComponent.sendToUserPage(this.appComponent.userNickname);
    }
  }
}
