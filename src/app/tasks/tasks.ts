import { Component, Input } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  imports: [],
  styleUrl: './tasks.css',
})
export class TaskComponent {
  @Input() name?: string;
  // userName!: object;
//   const key = 'name';
//   userName[key] = DUMMY_USERS.find((user) => user.id === this.selectedID);

}
