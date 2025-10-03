import { NgModule } from '@angular/core';
import { App } from './app';
import { TaskComponent } from './tasks/tasks';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [BrowserModule, TaskComponent, HeaderComponent, User],
})
export class AppModule {}
