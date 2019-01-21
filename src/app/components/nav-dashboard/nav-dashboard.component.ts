import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.css']
})
export class NavDashboardComponent implements OnInit {

  constructor() { }

  clearLocal() {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
  }

  ngOnInit() { }

}
