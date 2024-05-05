import { Component, Input, OnInit } from '@angular/core';
import { Chat, Datum } from '../../interfaces/time-minder-response';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements OnInit {

  @Input() chatSelected: Chat;

  myMessage: Datum = {
    datetime: new Date().toDateString(),
    owner: 'no owner',
    message: 'no message'
  };

  constructor(){
    this.chatSelected = {
      id: "",
      members: [],
      data: []
    };
  }
  
  ngOnInit(): void {
    console.log(this.chatSelected)
  }

  getInputValue(message: string) {
    this.myMessage.datetime = new Date().toDateString();
    this.myMessage.owner = "user-1";
    this.myMessage.message = message;
    if (this.chatSelected) {
      this.chatSelected.data.push(this.myMessage);
    }
  }
}
