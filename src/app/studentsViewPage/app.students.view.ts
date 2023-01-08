import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'view-students-page',
  templateUrl: './app.view.students.html',
  styleUrls: ['./app.view.students.css'],
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

  redirectToDetail(getKey: string): void {
    this.router.navigate(['viewstudentdetail'], {queryParams: { id: getKey }});
  }

  allStudents: Array<string> = this.getAllStudents();
}
