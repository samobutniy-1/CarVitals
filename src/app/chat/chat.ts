import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../gemini';
import { LucideWrench, LucideSend } from '@lucide/angular';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, LucideWrench, LucideSend],
  templateUrl: './chat.html',
})
export class ChatComponent {
  readonly translation = inject(TranslationService);
  userInput = signal('');

  constructor(public gemini: GeminiService) {}

  send() {
    const text = this.userInput().trim();
    if (!text) return;
    this.gemini.sendMessage(text);
    this.userInput.set('');
  }
}
