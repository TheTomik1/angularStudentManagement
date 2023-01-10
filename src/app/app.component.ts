import { Component } from '@angular/core';
import { LoginPage } from './logInPage/app.login';
import { UserPage } from './userPage/app.userpage';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginPage]
})
export class AppComponent {

}
