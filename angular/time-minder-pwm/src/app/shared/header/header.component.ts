import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  datobotonIS = "Iniciar Sesión"
  hrefbotonIS = "/auth"
  customclassboton = "botonR"
  datobotonR = "Registrarse"
  hrefbotonR = "/auth/sign-in"
}
