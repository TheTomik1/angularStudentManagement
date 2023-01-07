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
  statusMessage: string = "";
  yesNoCardEnabled: boolean = false;

  handleCard(): void {
    this.yesNoCardEnabled = !this.yesNoCardEnabled;
  }

  findStudent(): string {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key).split(",");
      if (key.length == 1) {
        if (value[0] == this.firstNameValue.trim() && value[1] == this.lastNameValue.trim()) {
          this.handleCard();
          return key;
        }
      }    
    }
    this.statusMessage = "This student has not been found in the system. Be sure to check your spelling.";
    return "notfound";
  }

  deleteStudent(key: string): void {
      this.localStorage.removeData(key);
      this.statusMessage = "";  
  }
}
