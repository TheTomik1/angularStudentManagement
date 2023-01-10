import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LocalStorage } from '../localStorage';

@Component({
  selector: 'student-add-page',
  templateUrl: './app.student.add.html',
  styleUrls: ['./app.student.add.css'],
  standalone: true,
	imports: [FormsModule, NgbDropdownModule, CommonModule],
})
export class StudentAddPage {
  constructor(private localStorage: LocalStorage, private router: Router) {}

  firstNameValue: string = '';
  lastNameValue: string = '';
  classValue: string = '';
  ageValue: string = ''
  birthdayValue: string = '';
  fieldValue: string = '';
  genderValue: string = '';
  markValue: string = '';
  disabledValue: string = '';
  rewardsValue: string = '';

  verifyFields(): boolean {
    if (this.firstNameValue == "" || this.lastNameValue == "") {
      alert("Empty required fields. Make sure that both required field are not empty.");
      return false;
    } else {
      return true;
    }
  }

  getHighestStudentId(): number {
    let highestId: number = 0;

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.length == 1) {
        highestId += 1;
      }
    }
    return highestId+1;
  }

  getAgeOutOfBirthday(getCurrentTime: Date, getBirthdayDate: Date): string {
    const timeDiff = getCurrentTime.getTime() - getBirthdayDate.getTime();
    const timeDiffDate = new Date(timeDiff);
    return Math.abs(timeDiffDate.getUTCFullYear() - 1970).toString();
  }

  verifyRewards(): boolean {
    if (this.rewardsValue.includes(",")) {
      alert("Commas are not allowed in the rewards field.")
      return false;
    } else {
      return true;
    }
  }

  addStudent(): void {
    let latestEdit : string = new Date().toISOString().replace("T", " ").split('.')[0];
    let getHighestId: number = this.getHighestStudentId();
    let getAge: string = this.getAgeOutOfBirthday(new Date(), new Date(this.birthdayValue));

    let mergeData: string = `${this.firstNameValue},${this.lastNameValue},${this.classValue},${getAge},${this.birthdayValue},${this.fieldValue},${this.genderValue},${this.markValue},${this.disabledValue},${this.rewardsValue},${latestEdit}`;

    if (this.verifyFields() == true && this.verifyRewards() == true) {
      this.localStorage.setData(getHighestId.toString(), mergeData);
      this.router.navigate(["viewstudentdetail"], {queryParams: { id: getHighestId.toString() }});
    }
  }
}
