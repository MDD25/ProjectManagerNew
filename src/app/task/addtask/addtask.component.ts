import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AddtaskService } from '../services/task.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskViewModel } from '../model/task-view-model';
import { ParentTask } from '../model/parent-task';
import { ProjectModalComponent } from '../modal/project-modal/project-modal.component';
import { TaskPopupComponent } from '../modal/task-modal/task-popup.component';
import { ActivatedRoute } from '@angular/router';
import { UserModalComponent } from 'src/app/user/Modal/UserModal/user-modal.component';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  viewModel: TaskViewModel;
  parentTasks: ParentTask[];
  editing: boolean;

  constructor(public addTaskService: AddtaskService, private activeRoute: ActivatedRoute, public taskDialog: MatDialog,
    public userDialog: MatDialog, public projectDialog: MatDialog) {
    this.editing = this.activeRoute.snapshot.params["mode"] == "edit";
    
    if (this.editing) {
      let id = this.activeRoute.snapshot.params["id"];
      this.viewModel = new TaskViewModel();
      this.addTaskService.getTasks().subscribe(x => this.viewModel = x.find(a=> a.TaskID == id));
    }
  }

  ngOnInit() {
    if(this.viewModel == null)
    {
      this.viewModel = new TaskViewModel();
    }
    this.getParentTasks();
  }

  OpenParentTaskPopup(): void {
    const dialogRef = this.taskDialog.open(TaskPopupComponent, {
      width: '600px',
      data: { ParentTask: this.parentTasks }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.viewModel.ParentTaskID = result.ParentID
      this.viewModel.ParentTaskName = result.ParentTask;
    });
  }

  OpenUserPopup() {
    const dialogRef = this.userDialog.open(UserModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.viewModel.UserID = result.UserID;
      this.viewModel.UserName = result.FirstName;
    })
  }

  OpenProjectPopup() {
    const dialogRef = this.projectDialog.open(ProjectModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.viewModel.ProjectID = result.ProjectID;
      this.viewModel.ProjectName = result.ProjectTitle;
    })
  }
  onSubmit(form: NgForm): void {
    if (this.viewModel.TaskID == null) {
      this.addTaskService.saveTask(this.viewModel).subscribe(() => { this.getParentTasks(); });
      this.viewModel = new TaskViewModel();
    }
    else {
      this.addTaskService.updateTask(this.viewModel).subscribe(() => { this.getParentTasks(); });
    }
    if (form != null) {
      this.viewModel = new TaskViewModel();
      form.reset();
    }
    this.getParentTasks();
  }
  getParentTasks(): void {
    this.addTaskService.getParentTasks().subscribe(x => this.parentTasks = x as ParentTask[]);
  }
}
