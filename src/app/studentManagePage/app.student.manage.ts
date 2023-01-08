import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from '../localStorage';

@Component({
  selector: 'student-manage-page',
  templateUrl: './app.student.manage.html',
  styleUrls: ['./app.student.manage.css'],
})
export class StudentManagePage {
  constructor(private localStorage: LocalStorage) {}

  firstNameValue: string = '';
  lastNameValue: string = '';
  classValue: string = '';
  ageValue: number = 0;
  birthdayValue: string = '';
  fieldValue: string = '';
  genderValue: string = '';
  percentageValue: number = 0;
  disabledValue: string = '';
  rewardsValue: string = '';

  verifyFields(): boolean {
    if (this.firstNameValue == "" || this.lastNameValue == "" || this.classValue == "" || this.ageValue == 0 || this.birthdayValue == "" || this.fieldValue == "" || this.genderValue == "" ||
    this.percentageValue == 0 || this.disabledValue == "" || this.rewardsValue == "") {
      return false
    } else {
      return true;
    }
  }

  getHighestStudentId(): number {
    let highestId: number = 0;

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.length == 1) {
        highestId += 1;
      }
    }
    return highestId+1;
  }

  addStudent(): void {
    let getHighestId: number = this.getHighestStudentId();
    let currentTime = new Date();
    let currentDay = currentTime.getDate();
    let currentMonth = currentTime.getMonth()+1;
    let currentYear = currentTime.getFullYear();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let currentTimeFormatted = `${currentDay}:${currentMonth}:${currentYear} ${currentHours}:${currentMinutes}:${currentSeconds}`;
    console.log(currentTimeFormatted)

    let mergeData: string = `${this.firstNameValue},${this.lastNameValue},${this.classValue},${this.ageValue},${this.birthdayValue},${this.fieldValue},${this.genderValue},${this.percentageValue},${this.disabledValue},${this.rewardsValue},${currentTimeFormatted}`;

    if (this.verifyFields() == true) {
      console.log(mergeData)
      this.localStorage.setData(getHighestId.toString(), mergeData)
      console.log(this.localStorage.getData("6"));
    }
  }
}
