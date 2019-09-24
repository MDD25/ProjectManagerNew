import { Component, OnInit } from '@angular/core';
import { ViewTaskModel } from '../model/view-task-model';
import { Project } from 'src/app/project/project';
import { ProjectService } from 'src/app/project/project-service';
import { MatDialog } from '@angular/material';
import { ProjectModalComponent } from '../modal/project-modal/project-modal.component';
import { AddtaskService } from '../services/task.service';
import { TaskViewModel } from '../model/task-view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss']
})
export class ViewtaskComponent implements OnInit {
  viewTaskModel: ViewTaskModel;

  constructor(private taskService: AddtaskService, public projectDialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.viewTaskModel = new ViewTaskModel();
    this.viewTaskModel.TaskList = [];
    this.getTasks();
  }

  OpenProjectPopup(): void {

    const dialogRef = this.projectDialog.open(ProjectModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.viewTaskModel.ProjectID = result.ProjectID;
      this.viewTaskModel.ProjectName = result.ProjectTitle;
      this.viewTaskModel.TaskList = this.viewTaskModel.TaskList.filter(x => x.ProjectID === result.ProjectID);
    })
  }

  getTasks() {
    this.taskService.getTasks().subscribe(x => this.viewTaskModel.TaskList = x as TaskViewModel[]);
  }
  
  endTask(taskId: number): void {
    this.taskService.getTasks().subscribe(x => this.viewTaskModel.TaskList = x as TaskViewModel[]);
  }

  sortTask<T>(propName: keyof TaskViewModel): void {
    this.viewTaskModel.TaskList.sort((a, b) => {
      if (propName === "Status") {
        if (a[propName] == "Completed")
          return 1;
      }
      else {
        if (a[propName] < b[propName])
          return -1;
        if (a[propName] > b[propName])
          return 1;
        return 0;
      }
    });
  }
}
