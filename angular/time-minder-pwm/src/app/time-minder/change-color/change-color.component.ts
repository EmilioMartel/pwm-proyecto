import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrl: './change-color.component.css'
})
export class ChangeColorComponent {
  @Input() titulo: string="Guardar Cambios"
  barraReducida = false;

  toggleBarraLateral(): void {
    this.barraReducida = !this.barraReducida;
  }

}
