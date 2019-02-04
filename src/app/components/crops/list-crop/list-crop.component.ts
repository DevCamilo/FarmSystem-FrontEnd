import { Component, OnInit } from '@angular/core';
import { CropService } from 'src/app/providers/crop.service';

@Component({
  selector: 'app-list-crop',
  templateUrl: './list-crop.component.html',
  styleUrls: ['./list-crop.component.css']
})
export class ListCropComponent implements OnInit {
  listcrop : any;
  p: number = 1;
  constructor(private crop: CropService) { }

  ngOnInit() {
    this.crop.listAllCrops().subscribe((res: any) => {
      console.log(res);
      this.listcrop = res.data
    });
  }

}
