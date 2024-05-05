import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-boton-confirmacion',
  standalone: true,
  imports: [],
  templateUrl: './boton-confirmacion.component.html',
  styleUrl: './boton-confirmacion.component.css'
})
export class BotonConfirmacionComponent {
  @Input() title: string = '';
}
