import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrl: './friend-request.component.css'
})
export class FriendRequestComponent {
  @Input() nombre: string = "Cristian Marrero López";
}
