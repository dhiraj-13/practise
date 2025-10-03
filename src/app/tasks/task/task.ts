import { Component, inject, Input } from '@angular/core';

import { type TaskObject } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  // imports: [Card, DatePipe],
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskObject;
  // @Output() taskcompleted = new EventEmitter<string>();
  private tasksService = inject(TaskService);

  taskCompleted() {
    // this.taskcompleted.emit(this.task.id);
    this.tasksService.removeTas(this.task.id);
  }
}
