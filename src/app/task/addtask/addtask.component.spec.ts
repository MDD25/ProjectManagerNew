import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskComponent } from './addtask.component';
import { AppModule } from 'src/app/app.module';
import { MatDialogModule, MatDialog } from '@angular/material';
import { AddtaskService } from '../services/task.service';
import { Observable } from 'rxjs';
import { TaskViewModel } from '../model/task-view-model';


describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;

  const dummyParentTasks = [{ ParentID: 1, ParentTask: 'dummy task1' }, { ParentID: 2, ParentTask: 'dummy task2' }]
  const dummyTaskViewModel = [{TaskID: 1, TaskName:'T1', ProjectID  :1, ProjectName:'PN1', 
                              IsParentTask: true,Priority: 1, ParentTaskID: 1, ParentTaskName:'PTN1',
                              StartDate:new Date(2018, 12, 13), EndDate: new Date(2018, 12, 13), 
                              UserID: 1, UserName : 'UN1', Status : 'Completed' }]
  
  let dummyAddTaskService = {
    getParentTasks: () => {
      return Observable.of(dummyParentTasks);
    },
    getTasks: () => {
      return Observable.of(dummyTaskViewModel);
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, MatDialogModule],      
      providers: [{ provide: AddtaskService, useValue: dummyAddTaskService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Parent Task Populated and validated', () => {
    component.ngOnInit();
    expect(component.parentTasks).toEqual(dummyParentTasks);
  });

  it('ViewModel validated', () => {
    component.ngOnInit();
    expect(component.viewModel.IsParentTask).toEqual(dummyTaskViewModel[0].IsParentTask);
  });
});
