import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.css']
})
export class NavDashboardComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem('user'));
  typeUser: any;
  constructor() { }

  clearLocal() {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
  }

  ngOnInit() {
    this.typeUser = this.user.typeUser == 1;
   }

}
