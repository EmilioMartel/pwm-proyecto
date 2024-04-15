import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormSignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'time-minder'
}
