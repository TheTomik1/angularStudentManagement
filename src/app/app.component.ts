import { Component } from '@angular/core';
import { AuthService } from './auth.service';

import { LocalStorage } from './localStorage';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(localStorage: LocalStorage) {}

  checkInitialization(): boolean {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key == "adminteacher@gmail.com") {
        return true;
      }
    }
    return false;
  }

  addAdminTeacher(): void {
    localStorage.setItem("adminteacher@gmail.com", "Password,Admin")
  }
}
