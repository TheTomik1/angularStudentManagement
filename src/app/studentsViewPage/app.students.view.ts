import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'students-view-page',
  templateUrl: './app.students.view.html',
  styleUrls: ['./app.students.view.css'],
})
export class StudentViewPage {
  constructor(private router: Router) {}


  getAllStudents(): Array<string> {
    let students = [];

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key).split(",");
      if (key.length == 1) { 
        students.push([key.toString()].concat(value));
      }    
    }
    return students;
  }

  sendToDetail(getKey: string): void {
    this.router.navigate(['viewstudentdetail'], {queryParams: { id: getKey }});
  }

  sendToEdit(getKey: string): void {
    this.router.navigate(['editstudent'], {queryParams: { id: getKey }});
  }

  allStudents: Array<string> = this.getAllStudents();
}
