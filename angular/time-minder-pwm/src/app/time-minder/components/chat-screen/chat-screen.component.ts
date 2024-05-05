import { Component, Input } from '@angular/core';
import { Chat, Datum } from '../../interfaces/time-minder-response';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrl: './chat-screen.component.css'
})
export class ChatScreenComponent {

  @Input({ required: true }) chatList: Chat[];

  myMessage: Datum = {
    datetime: new Date().toDateString(),
    owner: 'no owner',
    message: 'no message'
  };

  constructor(){
    this.chatList = [{
      id: "",
      members: [],
      data: []
    }]
  }


  getInputValue(message: string) {
    console.log("chat-screen", message);
    this.myMessage.datetime = new Date().toDateString();
    this.myMessage.owner = "user-1";
    this.myMessage.message = message
    this.chatList[this.chatList.length].data.push(this.myMessage);
  }

}
