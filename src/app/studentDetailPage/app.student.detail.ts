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
    getStudentId = this.route.snapshot.queryParams.id-1; // Lowering by 1 required here due to indexing below.
    studentData: Object = studentJson[this.getStudentId];
}

