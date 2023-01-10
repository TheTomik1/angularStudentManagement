import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './logInPage/app.login';
import { LogoutPage } from './logOutPage/app.logout';
import { UserPage } from './userPage/app.userpage';
import { StudentViewPage } from './studentsViewPage/app.students.view';
import { StudentDetailPage } from './studentDetailPage/app.student.detail';
import { StudentAddPage } from './studentAddPage/app.student.add';
import { StudentDeletePage } from './studentDeletePage/app.student.delete';

import { LoggedInGuard } from './logged.guard.service';

const routes: Routes = [
  { path: 'login', component: LoginPage},
  { path: 'logout', component: LogoutPage, canActivate: [LoggedInGuard] },
  { path: 'user/:id', component: UserPage, canActivate: [LoggedInGuard] },
  { path: 'viewstudents', component: StudentViewPage, canActivate: [LoggedInGuard] },
  { path: 'viewstudentdetail', component: StudentDetailPage, canActivate: [LoggedInGuard] },
  { path: 'deletestudent', component: StudentDeletePage },
  { path: 'addstudent', component: StudentAddPage, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
