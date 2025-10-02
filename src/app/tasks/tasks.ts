import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
// import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  imports: [Task, AddTask],
  styleUrl: './tasks.css',
})
export class TaskComponent {
  @Input({ required: true }) userID!: string;
  @Input({ required: true }) name!: string;
  isAddingtask = false;
  // @Output() addtaskforuserId = new EventEmitter<string>();

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUsertask() {
    return this.tasks.filter((task) => task.userId === this.userID);
  }
  // userName!: object;
  //   const key = 'name';
  //   userName[key] = DUMMY_USERS.find((user) => user.id === this.selectedID);

  taskidCompletion(id: string) {
    // console.log('event is', event);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  addTask(id: string) {
    // console.log('ID is', id);
    this.isAddingtask = true;
    // this.addtaskforuserId.emit(id);
  }

  closeDialog() {
    this.isAddingtask = false;
  }
}
