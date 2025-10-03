import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
import { type NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';
// import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  // imports: [Task, AddTask],
  standalone: false,
  styleUrl: './tasks.css',
})
export class TaskComponent {
  @Input({ required: true }) userID!: string;
  @Input({ required: true }) name!: string;
  isAddingtask = false;
  // private tasksService: TaskService;
  // @Output() addtaskforuserId = new EventEmitter<string>();

  constructor(private tasksService: TaskService) {
    // this.tasksService = tasksService;
  }

  get selectedUsertask() {
    return this.tasksService.getUserTasks(this.userID);
  }
  // userName!: object;
  //   const key = 'name';
  //   userName[key] = DUMMY_USERS.find((user) => user.id === this.selectedID);

  addTask(id: string) {
    // console.log('ID is', id);
    this.isAddingtask = true;
    // this.addtaskforuserId.emit(id);
  }

  // onAddTask(taskdata: NewTaskData) {
  //   this.isAddingtask = false;
  // }

  closeDialog() {
    this.isAddingtask = false;
  }
}
