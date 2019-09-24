import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserService } from '../../user.service';
import { User } from '../../User';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  users : User[]; 
  user : User;

  constructor(private userService:UserService, public dialogRef : MatDialogRef<UserModalComponent>, @Inject(MAT_DIALOG_DATA) public data : 'testDialog' ) { 
  }
  
  onNoClick() : void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.userService.getusers().subscribe(x => this.users = x as User[]);
  }
}
