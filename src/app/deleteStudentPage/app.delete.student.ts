import { Component } from '@angular/core';

import { LocalStorage } from '../localStorage';

@Component({
  selector: 'delete-student-page',
  templateUrl: './app.delete.student.html',
  styleUrls: ['./app.delete.student.css'],
})
export class DeleteStudentPage {
  constructor(private localStorage: LocalStorage) {}

  firstNameValue: string = "";
  lastNameValue: string = "";

  deleteStudent(): void {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key).split(",");
      if (key.length == 1) {
        if (value[0] == this.firstNameValue && value[1] == this.lastNameValue) {
          this.localStorage.removeData(key);
        }
      }    
    }
  }
}
