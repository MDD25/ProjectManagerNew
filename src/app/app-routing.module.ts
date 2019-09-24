import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { from } from 'rxjs';
import { ViewtaskComponent } from './task/viewtask/viewtask.component';
const appRoutes: Routes = [

  {
    path: 'user',
    component: UserComponent,
    data: { preload: true }

  },

  {
    path: 'project',
    component: ProjectComponent,
    data: { preload: true }

  },
  {
    path: 'task/view',
    component: ViewtaskComponent,
    data: { preload: true }
  },
  {
    path: 'task/:mode',
    component: AddtaskComponent,
    data: { preload: true }
  },
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
