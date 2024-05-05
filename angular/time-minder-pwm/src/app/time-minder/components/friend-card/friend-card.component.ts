import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrl: './friend-card.component.css'
})
export class FriendCardComponent {
  @Input() nombre: string = "Cristian Marrero López";
}
