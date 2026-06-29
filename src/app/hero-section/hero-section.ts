import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import {
  LucideSparkles,
  LucideStethoscope,
  LucideCalendarClock,
  LucideMessageCircle,
  LucideWrench,
} from '@lucide/angular';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    LucideSparkles,
    LucideStethoscope,
    LucideCalendarClock,
    LucideMessageCircle,
    LucideWrench,
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  readonly translation = inject(TranslationService);
}
