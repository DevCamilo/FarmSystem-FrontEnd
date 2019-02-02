import { Component, OnInit } from '@angular/core';
import { CropService } from '../../../providers/crop.service';
import { UserService } from '../../../providers/user.service';

@Component({
  selector: 'app-create-crop',
  templateUrl: './create-crop.component.html',
  styleUrls: ['./create-crop.component.css']
})
export class CreateCropComponent implements OnInit {
  crop: any;
  user = JSON.parse(localStorage.getItem('user'));
  employees = [];
  constructor( private Crops: CropService, private clients: UserService ) {
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

  onSubmit(){
    console.log(this.crop);
  }

}
