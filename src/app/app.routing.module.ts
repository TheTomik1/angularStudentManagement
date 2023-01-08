import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutPage } from './logOutPage/app.logout';
import { UserPage } from './userPage/app.userpage';
import { StudentViewPage } from './studentsViewPage/app.students.view';
import { StudentDetailPage } from './studentDetailPage/app.student.detail';
import { StudentManagePage } from './studentManagePage/app.student.manage';
import { StudentDeletePage } from './studentDeletePage/app.student.delete';

const routes: Routes = [
  { path: 'logout', component: LogoutPage },
  { path: 'user/:id', component: UserPage },
  { path: 'viewstudents', component: StudentViewPage },
  { path: 'viewstudentdetail', component: StudentDetailPage },
  { path: 'deletestudent', component: StudentDeletePage },
  { path: 'managestudent', component: StudentManagePage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
