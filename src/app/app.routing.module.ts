import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login/app.login';
import { LogoutPage } from './logout/app.logout';
import { UserPage } from './userpage/app.userpage';
import { ErrorPage } from './404/app.404';

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'logout', component: LogoutPage },
  { path: 'user/:id', component: UserPage },
  { path: '**', pathMatch: 'full', component: ErrorPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
