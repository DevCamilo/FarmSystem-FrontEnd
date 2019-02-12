import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  crop_id: any;
  constructor() {
    this.crop_id = 'Papa Pastusa'
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.crop_id);
    
  }
}
