import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment.development';
import { initializeApp } from 'firebase/app';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), initializeApp(environment.firebaseConfig),]
};
