import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../providers/login.service';

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

  constructor(private login: LoginService) {
    this.user = {
      userName: '',
      password: ''
    };
  }

  onSubmit() {
    if (this.user.userName && this.user.password !== '') {
      if (this.user.password.length <= 7) {
        this.errors.errorUserLog = false;
        this.errors.errorAll = false;
        this.errors.errorPass = true;
      } else {
        this.errors.errorUserLog = false;
        this.errors.errorPass = false;
        this.errors.errorAll = false;
        console.log(this.user);
        this.login.loginFunction(this.user).subscribe((res) => {
          console.log(res)
        })
        }
      } else {
      this.errors.errorUserLog = false;
      this.errors.errorPass = false;
      this.errors.errorAll = true;
    }
  }

  ngOnInit() { }

}
