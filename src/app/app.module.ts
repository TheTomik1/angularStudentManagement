import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginPage } from './login/app.login';
import { AppRoutingModule } from './app.routing.module';
import { LogoutPage } from './logout/app.logout';
import { UserPage } from './userpage/app.userpage';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, LoginPage, LogoutPage, UserPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
