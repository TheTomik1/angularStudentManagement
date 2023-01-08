import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from '../localStorage';

@Component({
  selector: 'student-manage-page',
  templateUrl: './app.student.manage.html',
  styleUrls: ['./app.student.manage.css'],
})
export class ManageStudentPage {
  constructor(private localStorage: LocalStorage) {}

  
}
