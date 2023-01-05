import { Component } from '@angular/core';

import studentData from '../students.json';

@Component({
  selector: 'view-students-page',
  templateUrl: './app.view.students.html',
  styleUrls: ['./app.view.students.css'],
})
export class ViewStudentsPage {
  studentsJson: any = studentData;
}
