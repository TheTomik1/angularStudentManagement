import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorage } from '../localStorage';

@Component({
  selector: 'student-delete-page',
  templateUrl: './app.student.delete.html',
  styleUrls: ['./app.student.delete.css'],
})
export class StudentDeletePage {
  constructor(private router: Router, private localStorage: LocalStorage) {}

  firstNameValue: string = "";
  lastNameValue: string = "";
  confirmDelete: string = ""; 

  findStudent(): void {
    if (this.confirmDelete != "Yes") {
      alert("You must confirm delete action inside the form.");
      return;
    }

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key).split(",");
      if (key.length == 1) {
        if (value[0] == this.firstNameValue.trim() && value[1] == this.lastNameValue.trim()) {
          this.deleteStudent(key);
        }
      }    
    }
  }

  deleteStudent(key: string): void {
    this.localStorage.removeData(key);
    this.router.navigate(["viewstudents"]);
  }
}
