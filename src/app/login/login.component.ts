import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  errors: any = {
    errorAll: false,
    errorPass: false,
    errorUser: false,
    errorUserLog: false
  };

  constructor(private _router: Router) {
    this.user = {
      user_nickName: '',
      user_password: ''
    };
  }

  onSubmit() {
    if (this.user.user_nickName && this.user.user_password !== '') {
      if (this.user.user_password.length <= 7) {
        this.errors.errorUserLog = false;
        this.errors.errorAll = false;
        this.errors.errorPass = true;
      } else {
        this.errors.errorUserLog = false;
        this.errors.errorPass = false;
        this.errors.errorAll = false;
        // console.log(this.user);

        }
      } else {
      this.errors.errorUserLog = false;
      this.errors.errorPass = false;
      this.errors.errorAll = true;
    }
  }

  ngOnInit() { }

}
