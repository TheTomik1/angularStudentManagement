import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import studentJson from '../students.json';

@Component({
  selector: 'student-detail-page',
  templateUrl: './app.student.detail.html',
  styleUrls: ['./app.student.detail.css'],
})
export class StudentDetailPage {
  constructor(private route: ActivatedRoute) {}
  getStudentLastName = this.route.snapshot.queryParams.lastname;
  studentData: Object = studentJson[this.getStudentLastName].firstName;
}
