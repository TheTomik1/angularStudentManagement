import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorage } from './localStorage';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private localStorage: LocalStorage) {}

  userEmail: string = '';
  userPassword: string = '';
  userNickname: string = '';
  handleLogOutPage: string = 'nav-item nav-link disabled';
  userStatus: string = 'Currently you are not logged in';
  loginFormView: boolean = true;

  sendToUserPage(getUserName: string): void {
    this.router.navigate(['user', getUserName]);
  }

  handleFormView(): void {
    this.loginFormView = !this.loginFormView;
  }

  verifyLoginForm(): void {
    if (this.userEmail.length == 0) {
    }
    if (this.userPassword.length == 0) {
    }

    const getUserData = this.localStorage.getData(this.userEmail).split(',');

    // this.localStorage.setData("1", "Tomas,Setnicky,3.B, Programming");
    console.log(this.localStorage.getData('1').split(','));

    if (getUserData[0] == this.userPassword) {
      this.handleLogOutPage = 'nav-item nav-link';
      this.userNickname = getUserData[1];
      this.userStatus = `Logged in as: ${this.userNickname}`;
      this.sendToUserPage(this.userNickname);
      this.handleFormView();
    }
  }
}
