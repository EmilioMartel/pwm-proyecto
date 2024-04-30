import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-aceptar',
  templateUrl: './boton-aceptar.component.html',
  styleUrl: './boton-aceptar.component.css'
})
export class BotonAceptarComponent {
  @Input() title: string = "";
}
