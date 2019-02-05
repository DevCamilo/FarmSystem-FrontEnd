import { Component, OnInit } from '@angular/core';
import { CropService } from '../../../providers/crop.service';
import { UserService } from '../../../providers/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-crop',
  templateUrl: './create-crop.component.html',
  styleUrls: ['./create-crop.component.css']
})
export class CreateCropComponent implements OnInit {
  crop: any;
  user = JSON.parse(localStorage.getItem('user'));
  token = localStorage.getItem('token');
  employees = [];

  constructor(private crops: CropService, private clients: UserService) {
    this.crop = {
      name: "",
      description: "",
      responsable: this.user._id,
      employees: [],
      pests: "",
      comment: "",
    };
  }

  ngOnInit() {
    //console.log(this.user);
    this.clients.listUserFunction().subscribe((res: any) => {
      //console.log(res);
      this.employees = res.data;
    });
  }

  onSubmit() {
    //console.log(this.crop);
    this.crops.saveCropFunction(this.crop, this.token).subscribe((res: any) => {
      //console.log(res); 
      if (res.status) {
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
    this.crop = {
      name: "",
      description: "",
      responsable: this.user._id,
      employees: [],
      pests: "",
      comment: "",
    };
  }

  // Forma tenporal de guardar los empleados tiene error 
  saveEmployeer(event) {
    this.crop.employees.push(event);
  }

}
