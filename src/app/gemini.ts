import { Injectable, signal, inject } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Injectable({ providedIn: 'root' })
export class GeminiService {
  private url = '/api/chat';
  private readonly translation = inject(TranslationService);

  messages = signal<{ role: 'user' | 'model'; text: string }[]>([]);
  loading = signal(false);

  async sendMessage(userText: string) {
    this.messages.update((m) => [...m, { role: 'user', text: userText }]);
    this.loading.set(true);

    const contents = this.messages().map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    }));

    try {
      const res = await fetch(this.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents }),
      });
      const data = await res.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ?? this.translation.t('chat.errorResponse');

      this.messages.update((m) => [...m, { role: 'model', text: reply }]);
    } catch (e) {
      this.messages.update((m) => [
        ...m,
        { role: 'model', text: this.translation.t('chat.errorRequest') },
      ]);
    } finally {
      this.loading.set(false);
    }
  }
}
