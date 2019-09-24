import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalComponent } from './user-modal.component';
import { AppModule } from 'src/app/app.module';
import { HttpModule, Http } from '@angular/http';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatButtonModule, MatDialogClose, MatButton } from '@angular/material';
import { UserService } from '../../user.service';

describe('UserModalComponent', () => {
  let component: UserModalComponent;
  let fixture: ComponentFixture<UserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[AppModule, HttpModule],  
      //imports: [MatDialogModule, MatButtonModule, HttpModule],
     // declarations: [UserModalComponent],
      providers: [
        UserService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: "" }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
