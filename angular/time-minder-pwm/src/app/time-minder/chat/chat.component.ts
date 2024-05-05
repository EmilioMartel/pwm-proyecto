
import { Component } from '@angular/core';
import { Chat } from '../interfaces/time-minder-response';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  chatList: Chat[] = [];
  chatSelected: Chat | null = null;
  
  constructor( private firestoreService: FirestoreService) {
    this.getChats();
  }

  getChats() {
    this.firestoreService.getChats().subscribe(response => {
      
      // Asigna los datos recibidos a chatList
      this.chatList = response.map(item => ({
        id: item.id,
        members: item.members,
        data: item.data
      }));
    });
  }

  // Función para mostrar el chat seleccionado
  showChat(chat: Chat) {
    this.chatSelected = chat;
  }

}
