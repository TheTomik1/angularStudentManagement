import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalStorage } from '../localStorage';

@Component({
  selector: 'student-edit-page',
  templateUrl: './app.student.edit.html',
  styleUrls: ['./app.student.edit.css'],
})
export class StudentEditPage {
  constructor(private localStorage: LocalStorage, private router: Router, private route: ActivatedRoute) {}

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

  firstNameValue: string = this.getStudentInfo(this.getStudentId)[0];
  lastNameValue: string = this.getStudentInfo(this.getStudentId)[1];
  classValue: string = this.getStudentInfo(this.getStudentId)[2];
  birthdayValue: string = this.getStudentInfo(this.getStudentId)[4];
  fieldValue: string = this.getStudentInfo(this.getStudentId)[5];
  genderValue: string = this.getStudentInfo(this.getStudentId)[6];
  markValue: string = this.getStudentInfo(this.getStudentId)[7];
  disabledValue: string = this.getStudentInfo(this.getStudentId)[8];
  rewardsValue: string = this.getStudentInfo(this.getStudentId)[9];

  
  getAgeOutOfBirthday(getCurrentTime: Date, getBirthdayDate: Date): string {
    if (getBirthdayDate.toString() == "Invalid Date") {
      return "Not specified."
    }

    const timeDiff = getCurrentTime.getTime() - getBirthdayDate.getTime();
    const timeDiffDate = new Date(timeDiff);
    return Math.abs(timeDiffDate.getUTCFullYear() - 1970).toString();
  }

  editStudent(): void {
    let latestEdit : string = new Date().toISOString().replace("T", " ").split('.')[0];
    let getAge: string = this.getAgeOutOfBirthday(new Date(), new Date(this.birthdayValue));
    
    let mergeData: string = `${this.firstNameValue},${this.lastNameValue},${this.classValue},${getAge},${this.birthdayValue},${this.fieldValue},${this.genderValue},${this.markValue},${this.disabledValue},${this.rewardsValue},${latestEdit}`;

    this.localStorage.removeData(this.getStudentId);
    this.localStorage.setData(this.getStudentId, mergeData);
    this.router.navigate(["viewstudentdetail"], {queryParams: { id: this.getStudentId }});
  }
}
