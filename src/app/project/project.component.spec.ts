import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { MatDialogModule, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ProjectComponent } from './project.component';
import { ProjectService } from './project-service';


describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  const dummyProjects = [{ ProjectTitle:'PN1', 
                              Priority: 1, 
                              ProjectID:1,
                              StartDate:new Date(2018, 12, 13),
                              EndDate: new Date(2018, 12, 13), 
                              UserID: 1, 
                              FirstName : 'UN1'}];
  
  // let dummyProjectService = {
  //   getProjects() :Observable<any[]>{
  //     return Observable.of(dummyProjects);
  //   }
  // };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, MatDialogModule],      
      // providers: [{ provide: ProjectService, useValue: dummyProjectService }]
      providers: [ProjectService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Project Collection Populated', () => {
  //   component.ngOnInit();
  //   expect(component.projects).toBeNull();
  // });
});
