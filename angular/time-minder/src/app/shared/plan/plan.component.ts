import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FreeCardPlanComponent } from '../../time-minder/components/plan-cards/free-card-plan/free-card-plan.component';
import { PremiumCardPlanComponent } from '../../time-minder/components/plan-cards/premium-card-plan/premium-card-plan.component';


@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FreeCardPlanComponent, PremiumCardPlanComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {

}
