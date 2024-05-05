import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-auth',
  templateUrl: './input-auth.component.html',
  styleUrl: './input-auth.component.css'
})
export class InputAuthComponent {
  @Input() contenido: string = "Valor por defecto";
  @Input() type: string = "text";
  @Input() pattern: string = "";
  @Input() identificador: string = "";
}
