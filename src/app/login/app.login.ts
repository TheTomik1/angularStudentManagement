import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css'],
})
export class LoginPage {
  boolValue: boolean = false;
  val: Object = {};

  verifyLogin(): void {
    fetch('../users.json')
      .then((res) => res.json())
      .then(); // do something with data
  }
}
