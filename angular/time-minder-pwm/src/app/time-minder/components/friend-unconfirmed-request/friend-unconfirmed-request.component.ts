import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-friend-unconfirmed-request',
  templateUrl: './friend-unconfirmed-request.component.html',
  styleUrl: './friend-unconfirmed-request.component.css'
})
export class FriendUnconfirmedRequestComponent {
  @Input() nombre: string = "Cristian Marrero López";
}
