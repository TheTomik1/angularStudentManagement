import { Component } from '@angular/core';

import studentJson from '../students.json';

interface Student {
  firstName: String;
  lastName: String;
  class: String;
  field: String;
}

@Component({
  selector: 'view-students-page',
  templateUrl: './app.view.students.html',
  styleUrls: ['./app.view.students.css'],
})
export class ViewStudentsPage {
  students: Student[] = studentJson;
}
