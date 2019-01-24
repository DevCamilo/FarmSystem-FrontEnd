import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../providers/task.service';
import { CropService } from 'src/app/providers/crop.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem('user'));
  taskData: any = {
    taskNum: 0,
    taskCount: [],
    taskStatus: false
  }
  cropData: any = {
    cropNum: 0,
    cropCount: [],
    cropStatus: false
  }
  constructor(private task: TaskService, private crop: CropService) { }

  ngOnInit() {
    this.task.taskIdUser(this.user._id).subscribe((res: any) => {
      //console.log(res);
      this.taskData.taskNum = res.data.length;
      this.taskData.taskCont = res.data
      this.taskData.taskStatus = res.data.length > 0;
    });
    this.crop.cropByIdResponsable(this.user._id).subscribe((res: any) => {
      //console.log(res);
      this.cropData.cropNum = res.data.length;
      this.cropData.cropCount = res.data;
      this.cropData.cropStatus = res.data.length > 0;
    });
  }

}
