import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() title: string = '';
  @Input() redirectToUrl: string = '';
  @Input() customClass: string = '';

  redirectTo(): void {
    window.location.href = this.redirectToUrl;
  }

}
