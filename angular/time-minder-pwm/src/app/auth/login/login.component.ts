import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() contenidoCorreo: string="Correo"
  @Input() tipo: string="email"
  @Input() patron: string="^[^\s@]+@[^\s@]+.[^\s@]+$"
  @Input() id: string="mail"
  @Input() contenidoContrasena: string="Contraseña"
  @Input() tipoContrasena: string="password"
  @Input() minlength: string="6"
  @Input() idContrasena: string="mail"
}
