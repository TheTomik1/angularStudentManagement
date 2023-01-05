import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutPage } from './logout/app.logout';
import { UserPage } from './userpage/app.userpage';

const routes: Routes = [
  { path: 'logout', component: LogoutPage },
  { path: 'user/:id', component: UserPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
