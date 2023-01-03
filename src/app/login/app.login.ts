import { Component } from '@angular/core';

import data from '../users.json';

@Component({
  selector: 'login-page',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css'],
})
export class LoginPage {
  boolValue: boolean = false;
  json: any = data;

  verifyLogin(): void {
    this.boolValue = !this.boolValue;
  }
}
