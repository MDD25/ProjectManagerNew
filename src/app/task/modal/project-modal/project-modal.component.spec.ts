import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalComponent } from './project-modal.component';
import { AppModule } from 'src/app/app.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component } from '@angular/compiler/src/core';

describe('ProjectModalComponent', () => {
  let component: ProjectModalComponent;
  let fixture: ComponentFixture<ProjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({     
      imports:[AppModule],     
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: "" }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Projects populated - working', ()=>
  // {
  //   expect(component.projects.length).toBeGreaterThan(0); 
  // })
});
