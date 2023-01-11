import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InformationPage } from '../informationPage/app.information';

@Component({
  selector: 'user-page',
  templateUrl: './app.userpage.html',
  styleUrls: ['./app.userpage.css'],
})
export class UserPage {
  constructor(private route: ActivatedRoute) {}

  currentUserId = this.route.snapshot.paramMap.get('id');
}
