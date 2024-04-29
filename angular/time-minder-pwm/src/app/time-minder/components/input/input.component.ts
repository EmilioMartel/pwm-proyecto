import { ValidEventTypes } from './../../../../../node_modules/eventemitter3/index.d';
import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  inputValue: string = "";
  inputSubject: Subject<string> = new Subject<string>();
  @Output() onInputValue = new EventEmitter<string>();

  constructor() {
    this.inputSubject.pipe(
      debounceTime(300) // Aplicar un retraso de 300 milisegundos
    ).subscribe((value) => {
      this.inputValue = value.trim();
    });
  }

  onInputChange(event: any) {
    const inputValue = event.target.value;
    this.inputSubject.next(inputValue); // Emitir el valor al Subject
  }

  sendMessage() {
    this.onInputValue.emit(this.inputValue);
  }

}
