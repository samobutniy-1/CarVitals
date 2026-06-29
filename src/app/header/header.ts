import { Component, inject } from '@angular/core';
import { LucideGauge, LucideSun, LucideMoon } from '@lucide/angular';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [LucideGauge, LucideSun, LucideMoon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly theme = inject(ThemeService);
}
