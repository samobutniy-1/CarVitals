import { Component, inject } from '@angular/core';
import { LucideGauge, LucideSun, LucideMoon } from '@lucide/angular';
import { ThemeService } from '../services/theme.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  imports: [LucideGauge, LucideSun, LucideMoon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly theme = inject(ThemeService);
  readonly translation = inject(TranslationService);
}
