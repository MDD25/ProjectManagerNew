import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { ProjectService } from './project/project-service';
import { HttpModule } from '@angular/http';
import { ProjectModule } from './project/project.module';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { AddtaskService } from './task/services/task.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from './task/modal/project-modal/project-modal.component';
import { TaskPopupComponent } from './task/modal/task-modal/task-popup.component';
import { ViewtaskComponent } from './task/viewtask/viewtask.component';
import { UserModalComponent } from './user/Modal/UserModal/user-modal.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    UserModule,
    ProjectModule,
    HttpModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [UserService, ProjectService, AddtaskService, { provide: APP_BASE_HREF, useValue: '/' }],
  declarations: [
    AppComponent,
    UserModalComponent,
    ProjectModalComponent,
    AddtaskComponent,
    TaskPopupComponent,
    ViewtaskComponent,
  ],
  entryComponents: [
    UserModalComponent,
    TaskPopupComponent,
    ProjectModalComponent,
    AddtaskComponent,
    ViewtaskComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
