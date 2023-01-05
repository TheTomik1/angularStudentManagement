import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';

@Component({
  selector: 'user-page',
  templateUrl: './app.userpage.html',
  styleUrls: ['./app.userpage.css'],
})
export class UserPage {
  constructor(private AppComponent: AppComponent, private router: Router) {}

  getUserNickname = this.AppComponent.userNickname;
}
