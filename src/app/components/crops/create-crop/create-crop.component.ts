import { Component, OnInit } from '@angular/core';
import { CropService } from '../../../providers/crop.service';

@Component({
  selector: 'app-create-crop',
  templateUrl: './create-crop.component.html',
  styleUrls: ['./create-crop.component.css']
})
export class CreateCropComponent implements OnInit {
  crop: any;
  usertE
  constructor() {
    this.crop = {
      name: "",
      description: "",
      responsable: {},
      employees: [],
      pests: "",
      comment: "",
      };
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.crop);
  }

}
