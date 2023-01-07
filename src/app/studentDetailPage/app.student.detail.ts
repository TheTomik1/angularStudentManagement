import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LocalStorage } from '../localStorage';

@Component({
  selector: 'student-detail-page',
  templateUrl: './app.student.detail.html',
  styleUrls: ['./app.student.detail.css'],
})
export class StudentDetailPage {
  constructor(private localStorage: LocalStorage, private route: ActivatedRoute) {}

  
}
