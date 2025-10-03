import { NgModule } from '@angular/core';
import { App } from './app';
// import { TaskComponent } from './tasks/tasks';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { BrowserModule } from '@angular/platform-browser';
import { Card } from './shared/card/card';
import { Task } from './tasks/task/task';
import { AddTask } from './tasks/add-task/add-task';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, HeaderComponent, User],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
