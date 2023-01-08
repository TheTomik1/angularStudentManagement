import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutPage } from './logOutPage/app.logout';
import { UserPage } from './userPage/app.userpage';
import { ViewStudentsPage } from './viewStudentsPage/app.view.students';
import { StudentDetailPage } from './studentDetailPage/app.student.detail';
import { ManageStudentPage } from './studentManagePage/app.student.manage';
import { StudentDeletePage } from './studentDeletePage/app.student.delete';

const routes: Routes = [
  { path: 'logout', component: LogoutPage },
  { path: 'user/:id', component: UserPage },
  { path: 'viewstudents', component: ViewStudentsPage },
  { path: 'viewstudentdetail', component: StudentDetailPage },
  { path: 'deletestudent', component: StudentDeletePage },
  { path: 'managestudent', component: ManageStudentPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
