import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-page',
  templateUrl: './app.userpage.html',
  styleUrls: ['./app.userpage.css'],
})
export class UserPage {
  constructor(private route: ActivatedRoute) {}

  currentUserName = this.route.snapshot.queryParams.id;
}
