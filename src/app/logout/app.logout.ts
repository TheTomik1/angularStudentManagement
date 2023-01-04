import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logout-page',
  templateUrl: './app.logout.html',
  styleUrls: ['./app.logout.css'],
})
export class LogoutPage {
  constructor(private router: Router) {}

  logOutSuccessful: boolean = false;

  logOutAgreed(agreedStatus: boolean): void {
    if (agreedStatus == true) {
      this.router.navigate(['']);
      this.logOutSuccessful = true;
    } else if (agreedStatus == false) {
      this.router.navigate([]);
    }
  }
}
