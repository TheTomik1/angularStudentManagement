import { Component } from '@angular/core';

import { LocalStorage } from '../localStorage';

@Component({
  selector: 'view-students-page',
  templateUrl: './app.view.students.html',
  styleUrls: ['./app.view.students.css'],
})
export class ViewStudentsPage {
  public constructor(private localStorage: LocalStorage) {}

  students = [];

  getAllStudents(): Array<string> {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      if (key == "1") {
        this.students.push(value.split(","))
      }    
    }
    console.log(this.students)
    return this.students;
  }
}
