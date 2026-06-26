import { Component } from '@angular/core';
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
export class HeroSection {}
