
import { Component } from '@angular/core';
import { Chat, Datum } from '../interfaces/time-minder-response';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  chatList: Chat[] = [];

  constructor( private firestoreService: FirestoreService) {
    this.getChats();
  }

  getChats() {
    this.firestoreService.getBooks().subscribe(response => {
      // Asigna los datos recibidos a chatList
      this.chatList = response.map(item => ({
        id: item.id,
        members: item.members,
        data: item.data
      }));
    });
  }

}
