import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';

@Component({
  selector: 'logout-page',
  templateUrl: './app.logout.html',
  styleUrls: ['./app.logout.css'],
})
export class LogoutPage {
  constructor(private appComponent: AppComponent, private router: Router) {}

  processLogOut(agreedStatus: boolean): void {
    if (agreedStatus == true) {
      this.router.navigate(['']);
      
      this.appComponent.userEmail = '';
      this.appComponent.userPassword = '';
    } else if (agreedStatus == false) {
      this.router.navigate(['user', this.appComponent.userNickname]);
    }
  }
}
