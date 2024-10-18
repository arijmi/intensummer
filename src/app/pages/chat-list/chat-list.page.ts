import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Chat {
  id: number;
  matchName: string;
  lastMessage: string;
}

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage {
  chats: Chat[] = [
    { id: 1, matchName: 'Match 1', lastMessage: 'Dernier message...' },
    { id: 2, matchName: 'Match 2', lastMessage: 'Salut, ça va ?' }
  ];

  constructor(private router: Router) {}

  goToChatDetail(chat: Chat) {
    this.router.navigate(['/chat-detail', chat.id]);
  }
}
