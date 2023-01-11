import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-page',
  templateUrl: './app.userpage.html',
  styleUrls: ['./app.userpage.css'],
})
export class UserPage {
  constructor(private router: Router, private route: ActivatedRoute) {}

  currentUserName = this.route.snapshot.paramMap.get('name');
}
