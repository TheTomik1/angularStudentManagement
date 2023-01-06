import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LogoutPage } from './logOutPage/app.logout';
import { UserPage } from './userPage/app.userpage';
import { ViewStudentsPage } from './viewStudentsPage/app.view.students';
import { StudentDetailPage } from './studentDetailPage/app.student.detail';
import { LoginPage } from './logInPage/app.login';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [AppComponent],
  declarations: [AppComponent, LoginPage, LogoutPage, UserPage, ViewStudentsPage, StudentDetailPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
