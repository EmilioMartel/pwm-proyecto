import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() contenido: string = "Valor por defecto";
  @Input() type: string = "text";
  @Input() id: string = "identificafor";
  @Input() name: string = "nombre";
  @Input() class: string = "clase";
  @Input() placeholder: string = " ";
  @Input() pattern: string = " ";
}
