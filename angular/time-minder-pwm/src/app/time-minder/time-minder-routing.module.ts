import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryComponent } from './diary/diary.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';
import { ChatComponent } from './chat/chat.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangeColorComponent } from './change-color/change-color.component';
import { FriendListComponent } from './friend-list/friend-list.component';

const routes: Routes = [
  { path: '', component: DiaryComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'change-color', component: ChangeColorComponent },
  { path: 'friend-list', component: FriendListComponent },
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeMinderRoutingModule { }
