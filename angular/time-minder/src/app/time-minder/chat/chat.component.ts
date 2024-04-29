import { Component } from '@angular/core';
import { Chat } from '../interfaces/time-minder-response';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  chatList: Chat[] = [
    {
      "id": "chat1",
      "members": ["user-1","user3"],
      "data": [
          {
              "datetime": "10/3/2024 15:03:24",
              "owner": "user-1",
              "message": "hola, que tal?"
          },
          {
              "datetime": "10/3/2024 15:03:24",
              "owner": "user-3",
              "message": "bien y tú?"
          },
          {
              "datetime": "10/3/2024 15:03:24",
              "owner": "user-1",
              "message": "que bueno, me alegro!!"
          }
      ]
    },
  ];

  constructor() {}



}
