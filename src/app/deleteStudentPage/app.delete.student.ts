import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import studentJson from '../students.json';

@Component({
  selector: 'delete-student-page',
  templateUrl: './app.delete.student.html',
  styleUrls: ['./app.delete.student.css'],
})
export class DeleteStudentPage {
  constructor(private route: ActivatedRoute) {}
  getStudentId = this.route.snapshot.queryParams.id-1; // Lowering by 1 required here due to indexing below.
  studentData: Object = studentJson[this.getStudentId];
}
