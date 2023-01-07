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

  redirectToDetail(getKey: string): void {
    this.router.navigate(['viewstudentdetail'], {queryParams: { id: getFirstName }});
  }

  allStudents: Array<string> = this.getAllStudents();
}
