import { Component } from '@angular/core';
import { BotonComponent } from '../index'

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrl: './form-sign-in.component.css'
})
export class FormSignInComponent {
  //Nombre
  contenidoNombre = "Nombre"
  typeNombre = "text"
  patternNombre = "[\w]+"
  identificadorNombre = "name"

  //Apellido
  contenidoApellido = "Apellido"
  typeApellido = "text"
  patternApellido = "[\w]+"
  identificadorApellido = "surname"

  //Mail
  contenidoMail = "Correo:"
  typeMail = "mail"
  patternMail = "^[^\s@]+@[^\s@]+\.[^\s@]+$"
  identificadorMail = "mail"

  //Mail
  contenidoPassword = "Crear contraseña:"
  typePassword = "password"
  patternPassword = ""
  identificadorPassword = "password"

  //Mail
  contenidoConfirmPassword = "Confirmar contraseña:"
  typeConfirmPassword = "password"
  patternConfirmPassword = ""
  identificadorConfirmPassword = "confirmPassword"

  //Boton
  titulo = "Registrarse"
}
