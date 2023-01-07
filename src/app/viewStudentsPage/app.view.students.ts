import { Component } from '@angular/core';

import { LocalStorage } from '../localStorage';

@Component({
  selector: 'view-students-page',
  templateUrl: './app.view.students.html',
  styleUrls: ['./app.view.students.css'],
})
export class ViewStudentsPage {
  public constructor(private localStorage: LocalStorage) {}

  getAllStudents(): Array<string> {
    let students = [];

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      if (key.length == 1) {
        students.push(value.split(","));
      }    
    }
    return students;
  }

  allStudents: Array<string> = this.getAllStudents();
}
