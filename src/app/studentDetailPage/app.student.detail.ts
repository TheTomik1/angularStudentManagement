import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocalStorage } from '../localStorage';


@Component({
  selector: 'student-detail-page',
  templateUrl: './app.student.detail.html',
  styleUrls: ['./app.student.detail.css'],
})
export class StudentDetailPage {
  constructor(private route: ActivatedRoute, private localStorage: LocalStorage) {}

  getStudentId: string = this.route.snapshot.queryParams.id;

  getStudentInfo(studentId: string): Array<string> {
    let value = [];

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key == studentId) { 
        value = localStorage.getItem(key).split(",");
      }    
    }
    return value;
  }
}
