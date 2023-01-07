import { Component } from '@angular/core';

@Component({
  selector: 'delete-student-page',
  templateUrl: './app.delete.student.html',
  styleUrls: ['./app.delete.student.css'],
})
export class DeleteStudentPage {
  firstNameValue: string = "";
  lastNameValue: string = "";

  deleteStudent: void {
    
  }
}
