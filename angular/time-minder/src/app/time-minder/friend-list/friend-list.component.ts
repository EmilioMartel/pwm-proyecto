import { Component } from '@angular/core';

import { FriendCardComponent } from '../components/friend-card/friend-card.component';
import { FriendRequestComponent } from '../components/friend-request/friend-request.component';
import { FriendUnconfirmedRequestComponent } from '../components/friend-unconfirmed-request/friend-unconfirmed-request.component';

@Component({
  selector: 'app-friend-list',
  standalone: true,
  imports: [FriendCardComponent, FriendRequestComponent, FriendUnconfirmedRequestComponent],
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.css'
})
export class FriendListComponent {

}
