import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonComponent } from "../boton/boton.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, BotonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
