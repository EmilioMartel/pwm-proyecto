import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'time-minder-pwm';
  constructor(private router: Router) {}

  isDiaryRoute(): boolean {
    // Obtener la ruta activa
    const currentUrl = this.router.url;

    // Verificar si la ruta activa es 'diary'
    return currentUrl.includes('time-minder');
  }

  isErrorRoute(): boolean {
    const url = this.router.url;
  return !(url.includes('time-minder') || url.includes('auth') || url.includes('')) ;
  }
}
