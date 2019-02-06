import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../providers/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: any;
  token: any = localStorage.getItem('token');
  constructor(private userAPI: UserService) {
    this.user = {
      name: "",
      lastName: "",
      telephone: "",
      document: "",
      typeUser: 1,
      userName: "",
      password: ""
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userAPI.createUserFunction(this.user, this.token).subscribe((res: any) => {
      console.log(res);
      if (res.status){
        Swal({
          type: 'success',
          title: res.message
        });
      } else {
        Swal({
          type: 'error',
          title: res.message
        });
      }
    });
    this.user = {
      name: "",
      lastName: ""
    }
  }
}
