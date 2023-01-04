import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  handleLoginPage: string = 'nav-item nav-link';
  handleLogOutPage: string = 'nav-item nav-link disabled';

  public verifyLogin(value: boolean): void {
    if (value == true) {
      this.handleLoginPage = 'nav-item nav-link disabled';
      this.handleLogOutPage = 'nav-item nav-link';
    }
  }
}
