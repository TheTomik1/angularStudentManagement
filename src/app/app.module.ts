import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LogoutPage } from './logOutPage/app.logout';
import { UserPage } from './userPage/app.userpage';
import { StudentViewPage } from './studentsViewPage/app.students.view';
import { StudentDetailPage } from './studentDetailPage/app.student.detail';
import { StudentManagePage } from './studentManagePage/app.student.manage';
import { StudentDeletePage } from './studentDeletePage/app.student.delete';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, StudentManagePage],
  providers: [AppComponent],
  declarations: [AppComponent, LogoutPage, UserPage, StudentViewPage, StudentDetailPage, StudentDeletePage],
  bootstrap: [AppComponent],
})
export class AppModule {}
