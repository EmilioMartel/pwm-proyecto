import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlanComponent } from './plan/plan.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TimeMinderModule } from '../time-minder/time-minder.module';
import { HconloginComponent } from './hconlogin/hconlogin.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HconloginComponent,
    FooterComponent,
    PlanComponent,
    ErrorPageComponent
  ],
  exports: [
    HeaderComponent,
    HconloginComponent,
    PlanComponent,
    ErrorPageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TimeMinderModule
  ]
})
export class SharedModule { }
