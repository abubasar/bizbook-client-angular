/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { AuthService } from './_services/auth.service';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLogIn = false;
  constructor(private analytics: AnalyticsService, public auth: AuthService, private menuService: NbMenuService) {
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title);
      });
  }

  ngOnInit() {
    this.analytics.trackPageViews();
  }
  loggedIn() {
    return this.auth.loggedIn();
  }


  onContecxtItemSelection(title) {
    if (title == "Log out") {
      this.auth.logout();
    }
  }

}
