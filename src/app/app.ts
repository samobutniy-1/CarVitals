import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { ChatComponent } from './chat/chat';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HeroSection, ChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('CarVitals');
}
