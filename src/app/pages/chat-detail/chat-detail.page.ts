import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage {
  messages: { text?: string; imageUrl?: string; isMe: boolean; }[] = [
    { text: 'Bienvenue dans le chat!', isMe: false }
  ];
  newMessage: string = '';
  selectedImage: File | null = null;

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<HTMLInputElement>;

  constructor() {}

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, isMe: true });
      this.newMessage = '';
    }
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.messages.push({ imageUrl: e.target.result, isMe: true });
        this.selectedImage = null; // Reset selected image
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  addPhoto() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImage = input.files[0];
    }
  }
}
