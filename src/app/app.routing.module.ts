import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './logInPage/app.login';
import { LogoutPage } from './logOutPage/app.logout';
import { StudentDetailPage } from './studentDetailPage/app.student.detail';
import { UserPage } from './userPage/app.userpage';
import { ViewStudentsPage } from './viewStudentsPage/app.view.students';

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'logout', component: LogoutPage },
  { path: 'user/:id', component: UserPage },
  { path: 'viewstudents', component: ViewStudentsPage },
  { path: 'viewstudentdetail', component: StudentDetailPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
