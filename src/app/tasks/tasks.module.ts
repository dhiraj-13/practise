import { NgModule } from '@angular/core';
import { TaskComponent } from './tasks';
import { AddTask } from './add-task/add-task';
import { Task } from './task/task';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent, AddTask, Task],
  exports: [TaskComponent],
  imports: [CommonModule, SharedModule, FormsModule
  ],
})
export class TasksModule {}
