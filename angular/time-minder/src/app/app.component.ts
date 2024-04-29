import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../assets/header/header.component';
import { FooterComponent } from '../assets/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { environment } from '../environments/environment.development';

import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


  title = 'time-minder';
}
