import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-input-auth-validate',
  templateUrl: './input-auth-validate.component.html',
  styleUrl: './input-auth-validate.component.css'
})
export class InputAuthValidateComponent {
  @Input() contenido: string = "Valor por defecto";
  @Input() type: string = "text";
  @Input() pattern: string = "";
  @Input() identificador: string = "";

  model: string = '';

  comparePattern(value: string, pattern: string): void {
    const regex = new RegExp(pattern);
    if (!regex.test(value)) {
      
    }
  }
}
