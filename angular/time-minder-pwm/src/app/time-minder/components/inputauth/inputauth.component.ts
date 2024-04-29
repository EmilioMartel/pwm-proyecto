import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-inputauth',
  templateUrl: './inputauth.component.html',
  styleUrl: './inputauth.component.css'
})
export class InputauthComponent {
  @Input() contenido: string = "Valor por defecto";
  @Input() type: string = "text";
  @Input() pattern: string = "";
  @Input() identificador: string = "";
}
