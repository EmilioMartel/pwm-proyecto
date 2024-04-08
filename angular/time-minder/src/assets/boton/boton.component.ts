import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() title: string = '';
  @Input() href: string = '';
  @Input() customClass: string = '';
}
