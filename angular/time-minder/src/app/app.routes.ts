import { Routes } from '@angular/router';
import { DiaryComponent } from './time-minder/diary/diary.component';
import { ChatComponent } from './time-minder/chat/chat.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResourcesComponent } from './time-minder/resources/resources.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent },
    {path: 'diary', component: DiaryComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'resources', component: ResourcesComponent},

];
