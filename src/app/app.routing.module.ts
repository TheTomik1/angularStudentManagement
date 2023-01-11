import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'logout', component: LogoutPage, canActivate: [LoggedInGuard] },
  { path: 'user/:name', component: UserPage, canActivate: [LoggedInGuard] },
  { path: 'addstudent', component: StudentAddPage, canActivate: [LoggedInGuard] },
  { path: 'viewstudents', component: StudentViewPage },
  { path: 'viewstudentdetail', component: StudentDetailPage },
  { path: 'editstudent', component: StudentEditPage},
  { path: 'deletestudent', component: StudentDeletePage, canActivate: [LoggedInGuard] },
  { path: '**', component: InformationPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
