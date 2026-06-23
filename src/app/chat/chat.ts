import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../gemini';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.html',
})
export class ChatComponent {
  userInput = signal('');

  constructor(public gemini: GeminiService) {}

  send() {
    const text = this.userInput().trim();
    if (!text) return;
    this.gemini.sendMessage(text);
    this.userInput.set('');
  }
}
