import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-aceptar',
  templateUrl: './boton-aceptar.component.html',
  styleUrl: './boton-aceptar.component.css'
})
export class BotonAceptarComponent {
  @Input() title: string = "";
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit();
  }
}
