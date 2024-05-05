import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeColorComponent } from './change-color/change-color.component';
import { ChatComponent } from './chat/chat.component';
import { DiaryComponent } from './diary/diary.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ResourcesComponent } from './resources/resources.component';
import {
  CreateGroupComponent,
  FriendCardComponent,
  FriendRequestComponent,
  FriendUnconfirmedRequestComponent,
  ModalComponent,
} from './components';
import { TimeMinderComponent } from './time-minder/time-minder.component'
import { TimeMinderRoutingModule } from './time-minder-routing.module';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import { BotonAceptarComponent } from './components/boton-aceptar/boton-aceptar.component';
import { BotonComponent } from './components/boton/boton.component';
import { CardComponent } from './components/card/card.component';
import { InputauthComponent } from './components/inputauth/inputauth.component';
import { HttpClientModule } from '@angular/common/http';
import { FreePlanCardComponent } from './components/plan-cards/free-plan-card/free-plan-card.component';
import { PremiumPlanCardComponent } from './components/plan-cards/premium-plan-card/premium-plan-card.component';
import { InputAuthComponent } from './components/input-auth/input-auth.component';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';
import { BotonComponent } from './components/boton/boton.component';
import { BotonAceptarComponent } from './components/boton-aceptar/boton-aceptar.component';

@NgModule({
  declarations: [
    ChangeColorComponent,
    ChatComponent,
    DiaryComponent,
    FriendListComponent,
    ProfileComponent,
    InputauthComponent,
    ResourcesComponent,
    CreateGroupComponent,
    FriendCardComponent,
    FriendRequestComponent,
    FriendUnconfirmedRequestComponent,
    ModalComponent,
    TimeMinderComponent,
    InputComponent,
    CardComponent,
    BotonAceptarComponent,
    BotonComponent,
    ChatScreenComponent,
    FreePlanCardComponent,
    PremiumPlanCardComponent,
    InputAuthComponent,
    FormSignInComponent,
    BotonComponent,
    BotonAceptarComponent
  ],
  imports: [
    CommonModule,
    TimeMinderRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    BotonAceptarComponent,
    BotonComponent,
    InputauthComponent,
    CardComponent,
    FormsModule,
    FreePlanCardComponent,
    PremiumPlanCardComponent,
    FormSignInComponent,
    BotonComponent
  ]
})
export class TimeMinderModule { }
