import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LocalStorage } from '../localStorage';

@Component({
  selector: 'student-manage-page',
  templateUrl: './app.student.manage.html',
  styleUrls: ['./app.student.manage.css'],
})
export class StudentManagePage {
  constructor(private localStorage: LocalStorage, private router: Router) {}

  myData = [
    { text: 'Books', value: 1 },
    { text: 'Movies, Music & Games', value: 2 },
    { text: 'Electronics & Computers', value: 3 },
    { text: 'Home, Garden & Tools', value: 4 },
    { text: 'Health & Beauty', value: 5 },
    { text: 'Toys, Kids & Baby', value: 6 },
    { text: 'Clothing & Jewelry', value: 7 },
    { text: 'Sports & Outdoors', value: 8 },
    { text: 'Automotive & Industrial', value: 9 }
];

  firstNameValue: string = '';
  lastNameValue: string = '';
  classValue: string = '';
  birthdayValue: string = '';
  fieldValue: string = '';
  genderValue: string = '';
  percentageValue: number = 0;
  disabledValue: string = '';
  rewardsValue: string = '';

  seasons = ["Spring", "Summer"]

  verifyFields(): boolean {
    if (this.firstNameValue == "" || this.lastNameValue == "" || this.birthdayValue == "" || this.fieldValue == "" || this.classValue == "") {
      alert("First name, last name, birthday date, field, and class are all mandatory fields.");
      return false;
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

  getAgeOutOfBirthday(getCurrentTime: Date, getBirthdayDate: Date): number {
    const timeDiff = getCurrentTime.getTime() - getBirthdayDate.getTime();

    const timeDiffDate = new Date(timeDiff);
  
    return Math.abs(timeDiffDate.getUTCFullYear() - 1970);
  }

  verifyRewards(getRewards: string): boolean {
    if (getRewards.includes(",")) {
      alert("Commas are not allowed in the rewards field.");
      return false;
    }
    return true;
  }

  addStudent(): void {
    let currentTime = new Date();
    let currentDay = currentTime.getDate();
    let currentMonth = currentTime.getMonth()+1;
    let currentYear = currentTime.getFullYear();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    let getHighestId: number = this.getHighestStudentId();
    let getAge = this.getAgeOutOfBirthday(currentTime, new Date(this.birthdayValue));

    let currentTimeFormatted = `${currentDay}.${currentMonth}.${currentYear} ${currentHours}:${currentMinutes}:${currentSeconds}`;
    let mergeData: string = `${this.firstNameValue},${this.lastNameValue},${this.classValue},${getAge},${this.birthdayValue},${this.fieldValue},${this.genderValue},${this.percentageValue},${this.disabledValue},${this.rewardsValue},${currentTimeFormatted}`;

    if (this.verifyFields() == true && this.verifyRewards(this.rewardsValue) == true) {
      this.localStorage.setData(getHighestId.toString(), mergeData);
      this.router.navigate(["viewstudentdetail"], {queryParams: { id: getHighestId.toString() }});
    } else {

    }
  }
}
