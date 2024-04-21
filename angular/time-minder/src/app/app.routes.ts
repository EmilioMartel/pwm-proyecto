import { Routes } from '@angular/router';
import { DiaryComponent } from './time-minder/diary/diary.component';
import { PlanComponent } from '../app/shared/plan/plan.component';

export const routes: Routes = [

    {path: 'diary', component: DiaryComponent},
    {path: 'plans', component: PlanComponent}
];
