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
  PlanCardsComponent
} from './components';
import { TimeMinderComponent } from './time-minder/time-minder.component'
import { TimeMinderRoutingModule } from './time-minder-routing.module';

@NgModule({
  declarations: [
    ChangeColorComponent,
    ChatComponent,
    DiaryComponent,
    FriendListComponent,
    ProfileComponent,
    ResourcesComponent,
    CreateGroupComponent,
    FriendCardComponent,
    FriendRequestComponent,
    FriendUnconfirmedRequestComponent,
    ModalComponent,
    PlanCardsComponent,
    TimeMinderComponent
  ],
  imports: [
    CommonModule,
    TimeMinderRoutingModule
  ]
})
export class TimeMinderModule { }
