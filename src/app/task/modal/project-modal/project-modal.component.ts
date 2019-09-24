import { Component, OnInit, Inject } from '@angular/core';
import { Project } from 'src/app/project/project';
import { ProjectService } from 'src/app/project/project-service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {
  project: Project;
  projects: Project[];
  constructor(private projectService: ProjectService, public dialogRef: MatDialogRef<ProjectModalComponent>, @Inject(MAT_DIALOG_DATA) public data: 'testDialog') {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.projectService.getprojects().subscribe(x => this.projects = x as Project[]);
  }
}
