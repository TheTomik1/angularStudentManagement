import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css'],
})
export class LoginPage {
  name = 'Angular ' + VERSION.major;
}
