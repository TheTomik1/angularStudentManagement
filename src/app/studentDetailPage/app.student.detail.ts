import { Component, OnInit } from '@angular/core';

import studentJson from '../students.json';

@Component({
  selector: 'student-detail-page',
  templateUrl: './app.student.detail.html',
  styleUrls: ['./app.student.detail.css'],
})
export class StudentDetailPage {
    studentData: any = studentJson;
}
