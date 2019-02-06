import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CropService } from 'src/app/providers/crop.service';

@Component({
  selector: 'app-update-crop',
  templateUrl: './update-crop.component.html',
  styleUrls: ['./update-crop.component.css']
})
export class UpdateCropComponent implements OnInit {
  _id: any;
  crop2: any;
  constructor(private route: ActivatedRoute, private cropAPI: CropService) { 
    this.crop2 = {};
  }

  ngOnInit() {
    this.route.params.subscribe((res:any) =>{
      this._id = res._id;
      this.cropAPI.listCropById(this._id).subscribe((res :any) => {
        console.log(res);
        if(res.data){
          this.crop2 = res.data;
        } else {

        }
      });  
    });
  }

}
