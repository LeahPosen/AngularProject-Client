import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { LoginComponent } from './modules/user/login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'LOG IN',
        link: './login',
        index: 0
      }, {
        label: 'LOG OUT',
        link: './logout',
        index: 1
      }, {
        label: 'SIGN UP',
        link: './register',
        index: 2
      }, {
        label: 'All Courses',
        link: './all-course',
        index: 3
      }, {
        label: 'Add Course',
        link: './add-course',
        index: 4
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}