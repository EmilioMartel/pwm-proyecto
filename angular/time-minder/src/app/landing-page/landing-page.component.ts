import { Component } from '@angular/core';
import { CardComponent } from '../time-minder/components/card/card.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
