import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LogoutPage } from './logOutPage/app.logout';
import { UserPage } from './userPage/app.userpage';
import { StudentViewPage } from './studentsViewPage/app.students.view';
import { StudentDetailPage } from './studentDetailPage/app.student.detail';
import { StudentAddPage } from './studentAddPage/app.student.add';
import { StudentDeletePage } from './studentDeletePage/app.student.delete';

import { AppComponent } from './app.component';

@Injectable()
class LoggedInGuard implements CanActivate {
  constructor(private appComponent: AppComponent) {}

  canActivate() {
      if (this.appComponent.userStatus != "Currently you are not logged in") {
        alert("You don't have permission to view this page"); (4)
        return false;
      }
  }
}

const routes: Routes = [
  { path: 'logout', component: LogoutPage },
  { path: 'user/:id', component: UserPage, canActivate: [LoggedInGuard] },
  { path: 'viewstudents', component: StudentViewPage },
  { path: 'viewstudentdetail', component: StudentDetailPage },
  { path: 'deletestudent', component: StudentDeletePage },
  { path: 'addstudent', component: StudentAddPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
