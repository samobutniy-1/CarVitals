import { Component, signal, computed } from '@angular/core';
import { VehicleSystem, Tutorial, TutorialLink, TutorialStep } from '../models/tutorials.model';

@Component({
  selector: 'app-tutorials',
  imports: [],
  templateUrl: './tutorials.html',
  styleUrl: './tutorials.css',
})
export class Tutorials {
  systems = signal<VehicleSystem[]>([
    { id: 'engine', name: 'Engine' },
    { id: 'suspension', name: 'Suspension' },
    { id: 'brakes', name: 'Brakes' },
    { id: 'electrical', name: 'Electrical' },
  ]);

  tutorials = signal<Tutorial[]>([
    {
      id: 'spark-plugs',
      name: 'Spark plugs',
      systemId: 'engine',
      tools: ['Spark plug socket', 'Extension bar', 'Torque wrench', 'Feeler gauge'],
      steps: [
        { order: '1', text: 'Let the engine cool down before starting' },
        { order: '2', text: 'Remove the ignition coils or plug wires' },
        { order: '3', text: 'Unscrew the old spark plug with the socket' },
        {
          order: '4',
          text: 'Check the gap on the new plug with the feeler gauge',
          image: '/assets/tutorials/spark-plug-gap.jpg',
        },
        { order: '5', text: 'Hand-tighten the new plug, then finish with the torque wrench' },
      ],
      links: [
        {
          title: 'Video: spark plug replacement step by step',
          link: 'https://example.com/spark-plugs-video',
        },
        {
          title: 'Article: how to choose the right spark plugs',
          link: 'https://example.com/spark-plugs-article',
        },
      ],
    },
    {
      id: 'shock-absorbers',
      name: 'Shock absorbers',
      systemId: 'suspension',
      tools: ['Jack', 'Jack stands', 'Socket set', 'Spring compressor'],
      steps: [
        { order: '1', text: 'Lift the car and secure it on jack stands' },
        { order: '2', text: 'Remove the wheel' },
        { order: '3', text: 'Loosen the top and bottom shock mounts' },
        {
          order: '4',
          text: 'Remove the old shock absorber',
          image: '/assets/tutorials/shock-removal.jpg',
        },
        { order: '5', text: 'Install the new shock and tighten the mounts' },
        { order: '6', text: 'Reattach the wheel and lower the car' },
      ],
      links: [
        { title: 'Video: replacing shock absorbers', link: 'https://example.com/shocks-video' },
      ],
    },
    {
      id: 'brake-pads',
      name: 'Brake pads',
      systemId: 'brakes',
      tools: ['Jack', 'Lug wrench', 'C-clamp', 'Socket set'],
      steps: [
        { order: '1', text: 'Lift the car and remove the wheel' },
        { order: '2', text: 'Remove the caliper and slide it aside' },
        { order: '3', text: 'Take out the old brake pads' },
        {
          order: '4',
          text: 'Compress the piston with the C-clamp',
          image: '/assets/tutorials/brake-piston.jpg',
        },
        { order: '5', text: 'Install the new pads and refit the caliper' },
        { order: '6', text: 'Pump the brake pedal a few times before driving' },
      ],
      links: [
        { title: 'Video: brake pad replacement', link: 'https://example.com/brake-pads-video' },
        {
          title: 'Article: when to replace brake pads',
          link: 'https://example.com/brake-pads-article',
        },
      ],
    },
    {
      id: 'battery',
      name: 'Battery',
      systemId: 'electrical',
      tools: ['Wrench set', 'Wire brush', 'Battery terminal grease'],
      steps: [
        { order: '1', text: 'Turn off the engine and remove the key' },
        { order: '2', text: 'Disconnect the negative terminal first, then the positive' },
        { order: '3', text: 'Remove the battery hold-down bracket' },
        { order: '4', text: 'Lift out the old battery' },
        {
          order: '5',
          text: 'Clean the terminals with the wire brush',
          image: '/assets/tutorials/battery-terminals.jpg',
        },
        { order: '6', text: 'Install the new battery and reconnect positive first, then negative' },
      ],
      links: [
        { title: 'Video: how to replace a car battery', link: 'https://example.com/battery-video' },
      ],
    },
  ]);

  // Id of the currently selected vehicle system
  selectedSystemId = signal<string | null>('engine');
  //Change systems
  selectSystem(system: string) {
    this.selectedSystemId.set(system);
    this.selectedTutorialId.set(null);
  }
  //Shows current system
  selectedSystem = computed(() => {
    return this.systems().find((s) => s.id === this.selectedSystemId());
  });

  selectedTutorialId = signal<string | null>('');
  //Shows tutorials by chosen system
  filteredTutorials = computed(() => {
    return this.tutorials().filter((t) => t.systemId === this.selectedSystemId());
  });
  // The full tutorial object for the currently selected tutorial
  selectedTutorial = computed(() => {
    return this.tutorials().find((t) => t.id === this.selectedTutorialId()) ?? null;
  });
  //Changes car detail
  selectTutorial(tutorial: string) {
    this.selectedTutorialId.set(tutorial);
  }
}
