import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { LogoutPage } from './logOutPage/app.logout';
import { UserPage } from './userPage/app.userpage';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [AppComponent],
  declarations: [AppComponent, HelloComponent, LogoutPage, UserPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
