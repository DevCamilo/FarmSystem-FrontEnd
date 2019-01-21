import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../providers/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem('user'));
  taskNum: any;
  taskCont: any;
  constructor(private task: TaskService) { }

  ngOnInit() {
    this.task.taskIdUser(this.user._id).subscribe((res: any) => {
      console.log(res);
        this.taskNum = res.data.length;
        this.taskCont = res.data
    });
  }

}
