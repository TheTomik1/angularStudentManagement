import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppComponent } from '../app.component';

@Component({
  selector: 'user-page',
  templateUrl: './app.userpage.html',
  styleUrls: ['./app.userpage.css'],
})
export class UserPage {
  constructor(private route: ActivatedRoute, private appComponent: AppComponent) {}

  currentUserId = this.route.snapshot.paramMap.get('id');
}
