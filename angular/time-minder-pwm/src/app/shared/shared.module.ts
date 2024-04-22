import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlanComponent } from './plan/plan.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PlanComponent,
    ErrorPageComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
