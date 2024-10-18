// src/app/services/message.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private db: AngularFireDatabase) {}

  sendMessage(matchId: string, userId: string, message: string) {
    const messageObj = {
      userId,
      message,
      timestamp: new Date().toISOString()
    };
    return this.db.list(`messages/${matchId}`).push(messageObj);
  }

  getMessages(matchId: string): Observable<any[]> {
    return this.db.list(`messages/${matchId}`).valueChanges();
  }
}
