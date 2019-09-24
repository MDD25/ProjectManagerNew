import { Component, ChangeDetectorRef } from '@angular/core';
import { User } from './User';
import { OnInit } from '@angular/core';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  users: User[];
  operation: string;

  ngOnInit() {
    this.user = new User();
    this.getUsers();
    this.operation = "Add";
  }
  constructor(private amser: UserService) {
  }

  getUsers() {
    return this.amser.getusers().subscribe(u => { this.users = u });
  }
  onSubmit(form: NgForm): void {    
    if (this.user.userID == null) {
      this.amser.saveUser(this.user).subscribe(() => { this.getUsers(); });
    }
    else {
      this.amser.updateUser(this.user).subscribe(() => { this.getUsers(); });
    }
  }

  delete(id: number): void {
    if (confirm('Are you sure to delete this record')) {
      this.amser.deleteuser(id).subscribe(() => { this.getUsers(); });
    }
  }

  edit(selecteduser): void {
    if (selecteduser) {
      this.operation = "Update";
      this.user.firstName = selecteduser.FirstName;
      this.user.lastName = selecteduser.LastName;
      this.user.employeeID = selecteduser.EmployeeID;
      this.user.userID = selecteduser.UserID;
    }
  }

  reset():void{
    this.user = new User();
  }
}

