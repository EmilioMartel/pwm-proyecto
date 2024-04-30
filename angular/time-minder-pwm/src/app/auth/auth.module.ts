import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { TimeMinderModule } from '../time-minder/time-minder.module';



@NgModule({
  declarations: [
    LoginComponent,
    RecoverPasswordComponent,
    SignInComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TimeMinderModule
  ]
})
export class AuthModule { }
