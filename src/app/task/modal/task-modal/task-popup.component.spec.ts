import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPopupComponent } from './task-popup.component';
import { AppModule } from 'src/app/app.module';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { AddtaskService } from '../../services/task.service';
import { HttpModule } from '@angular/http';

describe('TaskPopupComponent', () => {
  let component: TaskPopupComponent;
  let fixture: ComponentFixture<TaskPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpModule],
      declarations:[TaskPopupComponent],
      providers:
        [
          { provide: AddtaskService, },
          { provide: MatDialogRef, useValue: {} },
          { provide: MAT_DIALOG_DATA, useValue: "" },
        ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
