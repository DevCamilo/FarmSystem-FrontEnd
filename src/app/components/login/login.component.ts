import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../providers/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  message: string;
  errors: any = {
    errorAll: false,
    errorLogin: false
  };

  constructor(private login: LoginService) {
    this.user = {
      userName: '',
      password: ''
    };
  }

  onSubmit() {
    this.errors.errorAll = false;
    this.errors.errorLogin = false;
    if (this.user.userName && this.user.password !== '') {
        //console.log(this.user);
        this.login.loginFunction(this.user).subscribe((res: any) => {
          //console.log(res)
          if(res.status == false){
            this.errors.errorLogin = true;
            this.message = res.message;
          } else {
            console.log(res);
          }
        });
        
      } else {
      this.errors.errorAll = true;
    }
  }

  ngOnInit() { }

}
