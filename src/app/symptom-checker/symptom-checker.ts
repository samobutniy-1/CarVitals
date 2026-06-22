import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-symptom-checker',
  imports: [],
  templateUrl: './symptom-checker.html',
  styleUrl: './symptom-checker.css',
})
export class SymptomChecker {
  selectedCategory = signal<string>('brakes');
  selectCategory(category: string): void {
    this.selectedCategory.set(category);
    this.selectedSymptom.set('');
  }

  allSymptoms = [
    // brakes
    { value: 'squeal', label: 'High-pitched squeal when braking', category: 'brakes' },
    { value: 'grinding', label: 'Grinding metal-on-metal sound', category: 'brakes' },
    { value: 'soft-pedal', label: 'Brake pedal feels soft or spongy', category: 'brakes' },
    { value: 'vibration', label: 'Steering wheel vibrates when braking', category: 'brakes' },

    // suspension
    { value: 'knock', label: 'Knocking sound over bumps', category: 'suspension' },
    { value: 'pull', label: 'Car pulls to one side while driving', category: 'suspension' },
    { value: 'bounce', label: 'Excessive bouncing after hitting a bump', category: 'suspension' },
    { value: 'clunk-turn', label: 'Clunking noise when turning', category: 'suspension' },

    // engine
    { value: 'cold-squeal', label: 'Squeak on cold start', category: 'engine' },
    { value: 'tick', label: 'Ticking sound at idle', category: 'engine' },
    { value: 'rough-idle', label: 'Rough or unstable idle', category: 'engine' },
    { value: 'power-loss', label: 'Loss of power under acceleration', category: 'engine' },

    // electrical
    { value: 'flicker', label: 'Headlights flicker at idle', category: 'electrical' },
    { value: 'no-start', label: "Engine cranks but won't start", category: 'electrical' },
    { value: 'battery-drain', label: 'Battery drains overnight', category: 'electrical' },
    { value: 'warning-light', label: 'Check engine or battery light on', category: 'electrical' },
  ];

  filteredSymptoms = computed(() => {
    return this.allSymptoms.filter((symptom) => symptom.category === this.selectedCategory());
  });

  selectedSymptom = signal<string>('');
  selectSymptom(symptom: string): void {
    this.selectedSymptom.set(symptom);
  }

  allCauses = [
    // brakes - squeal
    {
      symptom: 'squeal',
      label: 'Worn brake pads (wear indicator touching rotor)',
      mostLikely: true,
    },
    { symptom: 'squeal', label: 'Glazed brake pads or rotor surface', mostLikely: false },
    { symptom: 'squeal', label: 'Dust or debris between pad and rotor', mostLikely: false },

    // brakes - grinding
    {
      symptom: 'grinding',
      label: 'Brake pads completely worn down to metal backing',
      mostLikely: true,
    },
    { symptom: 'grinding', label: 'Damaged or scored brake rotor', mostLikely: false },
    { symptom: 'grinding', label: 'Stone or debris caught in brake caliper', mostLikely: false },

    // brakes - soft-pedal
    { symptom: 'soft-pedal', label: 'Air in brake lines (needs bleeding)', mostLikely: true },
    {
      symptom: 'soft-pedal',
      label: 'Brake fluid leak at caliper or wheel cylinder',
      mostLikely: false,
    },
    { symptom: 'soft-pedal', label: 'Failing brake master cylinder', mostLikely: false },
    {
      symptom: 'soft-pedal',
      label: 'Severely overheated brake fluid (boiling)',
      mostLikely: false,
    },

    // brakes - vibration
    { symptom: 'vibration', label: 'Warped or uneven brake rotors', mostLikely: true },
    { symptom: 'vibration', label: 'Loose brake caliper bolts', mostLikely: false },
    {
      symptom: 'vibration',
      label: 'Uneven brake pad deposits on rotor surface',
      mostLikely: false,
    },

    // suspension - knock
    { symptom: 'knock', label: 'Worn or broken sway bar end links', mostLikely: true },
    { symptom: 'knock', label: 'Deteriorated control arm bushings', mostLikely: false },
    { symptom: 'knock', label: 'Worn ball joints', mostLikely: false },
    { symptom: 'knock', label: 'Loose or worn shock absorber mounts', mostLikely: false },

    // suspension - pull
    { symptom: 'pull', label: 'Wheels out of alignment', mostLikely: true },
    { symptom: 'pull', label: 'Uneven tire pressure between left and right', mostLikely: false },
    { symptom: 'pull', label: 'Seized brake caliper dragging on one side', mostLikely: false },
    { symptom: 'pull', label: 'Worn or collapsed strut on one side', mostLikely: false },

    // suspension - bounce
    { symptom: 'bounce', label: 'Worn or blown shock absorbers / struts', mostLikely: true },
    { symptom: 'bounce', label: 'Broken or sagging coil spring', mostLikely: false },
    { symptom: 'bounce', label: 'Incorrect tire pressure (too low)', mostLikely: false },

    // suspension - clunk-turn
    { symptom: 'clunk-turn', label: 'Worn CV joint or CV axle boot', mostLikely: true },
    { symptom: 'clunk-turn', label: 'Loose or worn tie rod ends', mostLikely: false },
    { symptom: 'clunk-turn', label: 'Worn strut bearing plate', mostLikely: false },

    // engine - cold-squeal
    {
      symptom: 'cold-squeal',
      label: 'Worn or loose serpentine / accessory belt',
      mostLikely: true,
    },
    {
      symptom: 'cold-squeal',
      label: 'Failing idler pulley or tensioner bearing',
      mostLikely: false,
    },
    {
      symptom: 'cold-squeal',
      label: 'Glazed belt surface from oil contamination',
      mostLikely: false,
    },

    // engine - tick
    { symptom: 'tick', label: 'Low engine oil level or pressure', mostLikely: true },
    { symptom: 'tick', label: 'Worn or stuck valve lifters / tappets', mostLikely: false },
    { symptom: 'tick', label: 'Loose or cracked exhaust manifold', mostLikely: false },
    { symptom: 'tick', label: 'Worn timing chain or tensioner', mostLikely: false },

    // engine - rough-idle
    { symptom: 'rough-idle', label: 'Fouled or worn spark plugs', mostLikely: true },
    { symptom: 'rough-idle', label: 'Vacuum leak in intake system', mostLikely: false },
    {
      symptom: 'rough-idle',
      label: 'Dirty or failing idle air control valve / throttle body',
      mostLikely: false,
    },
    { symptom: 'rough-idle', label: 'Weak or failing fuel injector', mostLikely: false },

    // engine - power-loss
    { symptom: 'power-loss', label: 'Clogged or failing fuel filter', mostLikely: true },
    { symptom: 'power-loss', label: 'Dirty mass airflow (MAF) sensor', mostLikely: false },
    { symptom: 'power-loss', label: 'Blocked catalytic converter', mostLikely: false },
    {
      symptom: 'power-loss',
      label: 'Failing fuel pump unable to maintain pressure',
      mostLikely: false,
    },

    // electrical - flicker
    { symptom: 'flicker', label: 'Weak or failing alternator', mostLikely: true },
    { symptom: 'flicker', label: 'Corroded or loose battery terminals', mostLikely: false },
    { symptom: 'flicker', label: 'Bad ground connection in lighting circuit', mostLikely: false },
    { symptom: 'flicker', label: 'Failing voltage regulator', mostLikely: false },

    // electrical - no-start
    { symptom: 'no-start', label: 'Faulty crankshaft position sensor', mostLikely: true },
    { symptom: 'no-start', label: 'Failed fuel pump not delivering fuel', mostLikely: false },
    { symptom: 'no-start', label: 'Flooded engine or hydrolocked cylinder', mostLikely: false },
    {
      symptom: 'no-start',
      label: "Broken timing belt / chain (engine won't fire)",
      mostLikely: false,
    },

    // electrical - battery-drain
    {
      symptom: 'battery-drain',
      label: 'Parasitic draw from a relay or module staying active',
      mostLikely: true,
    },
    {
      symptom: 'battery-drain',
      label: 'Old or failing battery that no longer holds charge',
      mostLikely: false,
    },
    {
      symptom: 'battery-drain',
      label: 'Faulty alternator not charging while driving',
      mostLikely: false,
    },

    // electrical - warning-light
    { symptom: 'warning-light', label: 'Failing oxygen (O2) or lambda sensor', mostLikely: true },
    {
      symptom: 'warning-light',
      label: 'Loose or missing fuel filler cap (EVAP leak)',
      mostLikely: false,
    },
    {
      symptom: 'warning-light',
      label: 'Catalytic converter below efficiency threshold',
      mostLikely: false,
    },
    {
      symptom: 'warning-light',
      label: 'Weak battery causing voltage fault codes',
      mostLikely: false,
    },
  ];

  filteredCauses = computed(() => {
    return this.allCauses.filter((cause) => cause.symptom === this.selectedSymptom());
  });
}
