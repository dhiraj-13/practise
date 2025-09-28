import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'zone.js';  // Included with Angular CLI by default


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

