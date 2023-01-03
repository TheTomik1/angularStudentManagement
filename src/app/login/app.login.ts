import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css'],
})
export class LoginPage {
  boolValue: boolean = false;
  logOutHandler: string = 'nav-item nav-link';

  verifyLogin(): void {
    this.boolValue = !this.boolValue;
    this.logOutHandler = 'nav-link disabled';
  }
}
