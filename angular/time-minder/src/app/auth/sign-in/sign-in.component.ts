import { Component } from '@angular/core';
import { FormSignInComponent } from '../../time-minder/components/form-sign-in/form-sign-in.component'

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormSignInComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
