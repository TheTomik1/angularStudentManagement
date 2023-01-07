import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'view-students-page',
  templateUrl: './app.view.students.html',
  styleUrls: ['./app.view.students.css'],
})
export class ViewStudentsPage {
  constructor(private router: Router) {}


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

  redirectToDetail(getFirstName: string, getLastName: string): void {
    this.router.navigate(['viewstudentdetail'], {queryParams: { firstname: getFirstName, lastname: getLastName }});
  }

  allStudents: Array<string> = this.getAllStudents();
}
