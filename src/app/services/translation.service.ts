import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Lang = 'en' | 'ua';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly http = inject(HttpClient);

  readonly lang = signal<Lang>(this.getInitialLang());
  private readonly translations = signal<Record<string, any>>({});

  constructor() {
    this.loadTranslations(this.lang());
  }

  toggle(): void {
    const next: Lang = this.lang() === 'en' ? 'ua' : 'en';
    this.lang.set(next);
    localStorage.setItem('lang', next);
    this.loadTranslations(next);
  }

  t(key: string): string {
    const value = key
      .split('.')
      .reduce((obj, part) => obj?.[part], this.translations() as Record<string, any>);
    return typeof value === 'string' ? value : key;
  }

  private loadTranslations(lang: Lang): void {
    this.http.get<Record<string, any>>(`/i18n/${lang}.json`).subscribe((data) => {
      this.translations.set(data);
    });
  }

  private getInitialLang(): Lang {
    const saved = localStorage.getItem('lang') as Lang | null;
    return saved ?? 'en';
  }
}
