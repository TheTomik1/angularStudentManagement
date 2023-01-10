import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginPage } from '../logInPage/app.login';

@Component({
  selector: 'user-page',
  templateUrl: './app.userpage.html',
  styleUrls: ['./app.userpage.css'],
})
export class UserPage {
  constructor(private appComponent: LoginPage, private router: Router) {}

  getUserNickname = this.appComponent.userNickname;
}
