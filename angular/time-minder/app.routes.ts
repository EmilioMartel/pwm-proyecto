import { Routes } from '@angular/router';
import { DiaryComponent } from './src/app/time-minder/diary/diary.component';
import { PlanComponent } from './src/app/shared/plan/plan.component';
import { FormSignInComponent } from './src/app/time-minder/components/form-sign-in/form-sign-in.component'
import { FriendListComponent } from './src/app/time-minder/friend-list/friend-list.component';

export const routes: Routes = [

    {path: 'diary', component: DiaryComponent},
    {path: 'plans', component: PlanComponent},
    {path: 'sign-in', component: FormSignInComponent},
    {path: 'friends-list', component: FriendListComponent}
];
