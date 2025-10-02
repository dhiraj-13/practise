import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type TaskObject } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskObject;
  @Output() taskcompleted = new EventEmitter<string>();

  taskCompleted() {
    this.taskcompleted.emit(this.task.id);
  }
}
