import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  // Definir un FormGroup para el formulario
  miFormulario: FormGroup = this.fb.group({
    nombre: [''],
    apellido:  [''],
    mail:  ['', Validators.email],
    password:  [''],
    confirmPassword:  [''],
  });

  

  constructor(private router: Router, private fb: FormBuilder) { }

  // Método para enviar los datos del usuario
  enviarDatos() {

    // Aquí puedes enviar los datos a tu servidor o hacer cualquier otra acción necesaria
    console.log("Datos del usuario:", this.miFormulario.value);
    
    // Después de enviar los datos, puedes redirigir a otra página
    //this.router.navigate(['/auth/']);
  }


  
}
