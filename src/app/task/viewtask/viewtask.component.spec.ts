import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtaskComponent } from './viewtask.component';
import { AppModule } from 'src/app/app.module';
import { AddtaskService } from '../services/task.service';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ViewTaskModel } from '../model/view-task-model';

describe('ViewtaskComponent', () => {
  let component: ViewtaskComponent;
  let fixture: ComponentFixture<ViewtaskComponent>;
  
  const dummyTaskViewModel = [{TaskID: 1, TaskName:'T1', ProjectID  :1, ProjectName:'PN1', 
                              IsParentTask: true,Priority: 1, ParentTaskID: 1, ParentTaskName:'PTN1',
                              StartDate:new Date(2018, 12, 13), EndDate: new Date(2018, 12, 13), 
                              UserID: 1, UserName : 'UN1', Status : 'Completed' }]
  
  let dummyAddTaskService = {   
    getTasks: () => {
      return Observable.of(dummyTaskViewModel);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers:[{provide:AddtaskService, useValue:dummyAddTaskService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get Task Test', () => {
    component.ngOnInit();
    expect(component.viewTaskModel.TaskList.length).toBeGreaterThan(0);
  });

});
