import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginPage } from './logInPage/app.login';
import { LogoutPage } from './logOutPage/app.logout';
import { UserPage } from './userPage/app.userpage';
import { StudentAddPage } from './studentAddPage/app.student.add';
import { StudentViewPage } from './studentsViewPage/app.students.view';
import { StudentDetailPage } from './studentDetailPage/app.student.detail';
import { StudentEditPage } from './studentEditPage/app.student.edit';
import { StudentDeletePage } from './studentDeletePage/app.student.delete';
import { InformationPage } from './informationPage/app.information';

import { LoggedInGuard } from './logged.guard.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule],
  providers: [AppComponent, LoggedInGuard, AuthService],
  declarations: [AppComponent, InformationPage, LoginPage, LogoutPage, UserPage, StudentViewPage, StudentDetailPage, StudentEditPage, StudentAddPage, StudentDeletePage],
  bootstrap: [AppComponent],
})
export class AppModule {}
