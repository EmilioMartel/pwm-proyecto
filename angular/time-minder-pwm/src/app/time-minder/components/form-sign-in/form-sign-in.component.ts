import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrl: './form-sign-in.component.css'
})
export class FormSignInComponent {

  //Nombre
  contenidoNombre = "Nombre"
  typeNombre = "text"
  patternNombre = "^[a-zA-Z]+$"
  identificadorNombre = "name"

  //Apellido
  contenidoApellido = "Apellido"
  typeApellido = "text"
  patternApellido = "^[a-zA-Z]+$"
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

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/auth/']);
  }

  almacenarDatos(){
    console.log("Hola puto!")
  }
}
