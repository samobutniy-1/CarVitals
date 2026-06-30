import { Component, signal, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { VehicleSystem, Tutorial, TutorialLink, TutorialStep } from '../models/tutorials.model';
import { LucideCog, LucideMoveVertical, LucideCircleDot, LucideZap } from '@lucide/angular';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-tutorials',
  imports: [LucideCog, LucideMoveVertical, LucideCircleDot, LucideZap, NgClass],
  templateUrl: './tutorials.html',
  styleUrl: './tutorials.css',
})
export class Tutorials {
  readonly translation = inject(TranslationService);

  systems = signal<VehicleSystem[]>([
    { id: 'engine', nameKey: 'tutorials.systems.engine' },
    { id: 'suspension', nameKey: 'tutorials.systems.suspension' },
    { id: 'brakes', nameKey: 'tutorials.systems.brakes' },
    { id: 'electrical', nameKey: 'tutorials.systems.electrical' },
  ]);

  tutorials = signal<Tutorial[]>([
    {
      id: 'spark-plugs',
      nameKey: 'tutorials.items.sparkPlugs.name',
      systemId: 'engine',
      toolKeys: [
        'tutorials.tools.sparkPlugSocket',
        'tutorials.tools.extensionBar',
        'tutorials.tools.torqueWrench',
        'tutorials.tools.feelerGauge',
      ],
      steps: [
        { order: '1', textKey: 'tutorials.items.sparkPlugs.steps.1' },
        { order: '2', textKey: 'tutorials.items.sparkPlugs.steps.2' },
        { order: '3', textKey: 'tutorials.items.sparkPlugs.steps.3' },
        {
          order: '4',
          textKey: 'tutorials.items.sparkPlugs.steps.4',
          image: '/assets/tutorials/spark-plug-gap.jpg',
        },
        { order: '5', textKey: 'tutorials.items.sparkPlugs.steps.5' },
      ],
      links: [
        {
          titleKey: 'tutorials.items.sparkPlugs.links.video',
          link: 'https://example.com/spark-plugs-video',
        },
        {
          titleKey: 'tutorials.items.sparkPlugs.links.article',
          link: 'https://example.com/spark-plugs-article',
        },
      ],
    },
    {
      id: 'shock-absorbers',
      nameKey: 'tutorials.items.shockAbsorbers.name',
      systemId: 'suspension',
      toolKeys: [
        'tutorials.tools.jack',
        'tutorials.tools.jackStands',
        'tutorials.tools.socketSet',
        'tutorials.tools.springCompressor',
      ],
      steps: [
        { order: '1', textKey: 'tutorials.items.shockAbsorbers.steps.1' },
        { order: '2', textKey: 'tutorials.items.shockAbsorbers.steps.2' },
        { order: '3', textKey: 'tutorials.items.shockAbsorbers.steps.3' },
        {
          order: '4',
          textKey: 'tutorials.items.shockAbsorbers.steps.4',
          image: '/assets/tutorials/shock-removal.jpg',
        },
        { order: '5', textKey: 'tutorials.items.shockAbsorbers.steps.5' },
        { order: '6', textKey: 'tutorials.items.shockAbsorbers.steps.6' },
      ],
      links: [
        {
          titleKey: 'tutorials.items.shockAbsorbers.links.video',
          link: 'https://example.com/shocks-video',
        },
      ],
    },
    {
      id: 'brake-pads',
      nameKey: 'tutorials.items.brakePads.name',
      systemId: 'brakes',
      toolKeys: [
        'tutorials.tools.jack',
        'tutorials.tools.lugWrench',
        'tutorials.tools.cClamp',
        'tutorials.tools.socketSet',
      ],
      steps: [
        { order: '1', textKey: 'tutorials.items.brakePads.steps.1' },
        { order: '2', textKey: 'tutorials.items.brakePads.steps.2' },
        { order: '3', textKey: 'tutorials.items.brakePads.steps.3' },
        {
          order: '4',
          textKey: 'tutorials.items.brakePads.steps.4',
          image: '/assets/tutorials/brake-piston.jpg',
        },
        { order: '5', textKey: 'tutorials.items.brakePads.steps.5' },
        { order: '6', textKey: 'tutorials.items.brakePads.steps.6' },
      ],
      links: [
        {
          titleKey: 'tutorials.items.brakePads.links.video',
          link: 'https://example.com/brake-pads-video',
        },
        {
          titleKey: 'tutorials.items.brakePads.links.article',
          link: 'https://example.com/brake-pads-article',
        },
      ],
    },
    {
      id: 'battery',
      nameKey: 'tutorials.items.battery.name',
      systemId: 'electrical',
      toolKeys: [
        'tutorials.tools.wrenchSet',
        'tutorials.tools.wireBrush',
        'tutorials.tools.batteryTerminalGrease',
      ],
      steps: [
        { order: '1', textKey: 'tutorials.items.battery.steps.1' },
        { order: '2', textKey: 'tutorials.items.battery.steps.2' },
        { order: '3', textKey: 'tutorials.items.battery.steps.3' },
        { order: '4', textKey: 'tutorials.items.battery.steps.4' },
        {
          order: '5',
          textKey: 'tutorials.items.battery.steps.5',
          image: '/assets/tutorials/battery-terminals.jpg',
        },
        { order: '6', textKey: 'tutorials.items.battery.steps.6' },
      ],
      links: [
        {
          titleKey: 'tutorials.items.battery.links.video',
          link: 'https://example.com/battery-video',
        },
      ],
    },
  ]);

  selectedSystemId = signal<string | null>('engine');

  selectSystem(system: string) {
    this.selectedSystemId.set(system);
    this.selectedTutorialId.set(null);
  }

  selectedSystem = computed(() => {
    return this.systems().find((s) => s.id === this.selectedSystemId());
  });

  selectedTutorialId = signal<string | null>('');

  filteredTutorials = computed(() => {
    return this.tutorials().filter((t) => t.systemId === this.selectedSystemId());
  });

  selectedTutorial = computed(() => {
    return this.tutorials().find((t) => t.id === this.selectedTutorialId()) ?? null;
  });

  selectTutorial(tutorial: string) {
    this.selectedTutorialId.set(tutorial);
  }
}
