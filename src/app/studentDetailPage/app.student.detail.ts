import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from '../localStorage';

@Component({
  selector: 'student-detail-page',
  templateUrl: './app.student.detail.html',
  styleUrls: ['./app.student.detail.css'],
})
export class StudentDetailPage {
  constructor(private localStorage: LocalStorage, private router: Router, private route: ActivatedRoute) {}

}
