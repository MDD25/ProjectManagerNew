import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ParentTask } from '../../model/parent-task';
import { AddtaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-popup',
  templateUrl: './task-popup.component.html',
  styleUrls: ['./task-popup.component.scss']
})
export class TaskPopupComponent implements OnInit {
parentTask:ParentTask;
parentTasks : ParentTask[];
  constructor(private taskService:AddtaskService, public dialogRef : MatDialogRef<TaskPopupComponent>, @Inject(MAT_DIALOG_DATA) public data : 'testDialog' ) { 
  }
  onNoClick() : void {
    this.dialogRef.close();
  }

  ngOnInit() {
    //this.taskService.getParentTasks().subscribe(x => this.parentTasks = x as ParentTask[]);
  }
}
