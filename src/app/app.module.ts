import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LogoutPage } from './logOutPage/app.logout';
import { UserPage } from './userPage/app.userpage';
import { ViewStudentsPage } from './viewStudentsPage/app.view.students';
import { StudentDetailPage } from './studentDetailPage/app.student.detail';
import { StudentManagePage } from './studentManagePage/app.student.manage';
import { DeleteStudentPage } from './deleteStudentPage/app.delete.student';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [AppComponent],
  declarations: [AppComponent, LogoutPage, UserPage, ViewStudentsPage, StudentDetailPage, StudentManagePage, DeleteStudentPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
