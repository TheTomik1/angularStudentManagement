import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { LocalStorage } from './localStorage';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private localStorage: LocalStorage, private authService: AuthService) {}

  userEmail: string = '';
  userPassword: string = '';
  userNickname: string = '';
  loginFormView: boolean = false;

  sendToUserPage(getUserName: string): void {
    this.router.navigate(['user', getUserName]);
  }

  verifyLoginForm(): void {
    if (this.userEmail.length == 0) {
      alert("Email field cannot be empty.");
    }
    if (this.userPassword.length == 0) {
      alert("Password field cannot be empty.");
    }

    const getUserData = this.localStorage.getData(this.userEmail).split(',');
    if (getUserData[0] == this.userPassword) {
      this.authService.login();
      this.userNickname = getUserData[1];
      this.sendToUserPage(this.userNickname);
    }
  }
}
