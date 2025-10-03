// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';
import 'zone.js';  // Included with Angular CLI by default


// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule)

// function platformBrowserDynamic() {
//   throw new Error('Function not implemented.')
// }
