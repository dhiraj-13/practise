import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './tasks/tasks';
// import { HeaderComponent } from ;

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, HeaderComponent],
  imports: [HeaderComponent, User, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selecteduserID = 'u1';
  protected readonly title = signal('angular-practise-app');
  // userObject: { id: string; name: string; avatar: string } | undefined;
  // newID!: string;

  onSelectedUser(id: string) {
    // this.newID = id;
    // this.userObject = DUMMY_USERS.find((user) => user.id === id);
    // this.userObject = user;
    // const user =
    // console.log("Selected User's ID is" + ' ' + id);
    this.selecteduserID = id;
  }

  get selectedUser(){
    return this.users.find((user) => user.id === this.selecteduserID);
  }
}
