import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() contenido: string = "Valor por defecto";
  @Input() type: string = "text";
  @Input() pattern: string = "";
  @Input() identificador: string = "";
}