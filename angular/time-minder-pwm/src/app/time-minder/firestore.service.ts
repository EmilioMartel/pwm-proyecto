import { Injectable } from '@angular/core';
import { Chat } from './interfaces/time-minder-response';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  constructor( private firestore: Firestore) {}


  getBooks(): Observable<Chat[]> {
    const chatsRef = collection(this.firestore, 'chats');
    return collectionData(chatsRef, { idField: 'id' }) as Observable<Chat[]>;
  }
}
