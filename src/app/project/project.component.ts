import { Component, Inject } from '@angular/core';
import { Project } from './project';
import { OnInit } from '@angular/core';
import { ProjectService } from './project-service';
import { NgForm } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../user/User';
import { UserModalComponent } from '../user/Modal/UserModal/user-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project;
  projects: Project[];
  dateDisabled: boolean;
  buttonText: string;
  user: User;

  ngOnInit() {
    this.buttonText = "Add";
    this.project = new Project();
    this.getProjects();
  }

  constructor(private projectService: ProjectService, public managerDialog: MatDialog) {
  }

  OpenManagerPopup(): void {

    const dialogRef = this.managerDialog.open(UserModalComponent, {
      width: '600px',
      data: { User: this.user }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.project.FirstName = result.FirstName;
      this.project.UserID = result.UserID;
    })
  }

  onCheckedChange(eve) {
    if (eve.target.checked) {
      this.dateDisabled = true
    }
    else {
      this.dateDisabled = false
    }
  }

  onSubmit(form: NgForm): void {

    if (this.project.Startdate > this.project.Enddate) {
      alert('Enddate should  not come before  start date');
      return;
    }
    if (this.project.ProjectID == null) {
      this.projectService.saveProject(this.project).subscribe(() => { this.getProjects(); });
    }
    else {
      this.projectService.updateProject(this.project).subscribe(() => { this.getProjects(); });
    }
    if (form != null) {
      this.project = new Project();
      form.reset();
      this.buttonText = "Add";
    }
    this.getProjects();
  }


  delete(id: number): void {
    if (confirm('Are you sure to delete this record') == true) {
      this.projectService.deleteProject(id).subscribe(() => { this.getProjects(); });
    }

  }

  edit(selectedproject): void {
    this.buttonText = "Update";

    if (selectedproject) {
      this.project.ProjectID = selectedproject.ProjectID;
      this.project.Startdate = selectedproject.StartDate;
      this.project.Enddate = selectedproject.EndDate;
      this.project.Priority = selectedproject.Priority;
      this.project.ProjectTitle = selectedproject.ProjectTitle;
      this.project.FirstName = selectedproject.FirstName;

    }
  }

  getProjects() {
    this.projectService.getprojects().subscribe(x => this.projects = x as Project[]);
  }

}

