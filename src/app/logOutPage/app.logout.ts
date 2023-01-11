import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'logout-page',
  templateUrl: './app.logout.html',
  styleUrls: ['./app.logout.css'],
})
export class LogoutPage {
  constructor(private router: Router, private route : ActivatedRoute, private authService: AuthService) {}

  getUserId = 0;

  processLogOut(agreedStatus: boolean): void {
    if (agreedStatus == true) {
      this.authService.logOut();
      this.router.navigate(['']);
    } else if (agreedStatus == false) {
      this.router.navigate(["user", this.getUserId])
    }
  }
}
