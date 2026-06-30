import { Component, signal, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  LucideCircleDot,
  LucideMoveVertical,
  LucideCog,
  LucideZap,
  LucideHelpCircle,
} from '@lucide/angular';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-symptom-checker',
  standalone: true,
  imports: [LucideCircleDot, LucideMoveVertical, LucideCog, LucideZap, LucideHelpCircle, NgClass],
  templateUrl: './symptom-checker.html',
  styleUrl: './symptom-checker.css',
})
export class SymptomChecker {
  readonly translation = inject(TranslationService);

  selectedCategory = signal<string>('brakes');
  selectCategory(category: string): void {
    this.selectedCategory.set(category);
    this.selectedSymptom.set('');
  }

  allSymptoms = [
    // brakes
    { value: 'squeal', labelKey: 'symptomChecker.symptoms.squeal', category: 'brakes' },
    { value: 'grinding', labelKey: 'symptomChecker.symptoms.grinding', category: 'brakes' },
    { value: 'soft-pedal', labelKey: 'symptomChecker.symptoms.softPedal', category: 'brakes' },
    { value: 'vibration', labelKey: 'symptomChecker.symptoms.vibration', category: 'brakes' },

    // suspension
    { value: 'knock', labelKey: 'symptomChecker.symptoms.knock', category: 'suspension' },
    { value: 'pull', labelKey: 'symptomChecker.symptoms.pull', category: 'suspension' },
    { value: 'bounce', labelKey: 'symptomChecker.symptoms.bounce', category: 'suspension' },
    { value: 'clunk-turn', labelKey: 'symptomChecker.symptoms.clunkTurn', category: 'suspension' },

    // engine
    { value: 'cold-squeal', labelKey: 'symptomChecker.symptoms.coldSqueal', category: 'engine' },
    { value: 'tick', labelKey: 'symptomChecker.symptoms.tick', category: 'engine' },
    { value: 'rough-idle', labelKey: 'symptomChecker.symptoms.roughIdle', category: 'engine' },
    { value: 'power-loss', labelKey: 'symptomChecker.symptoms.powerLoss', category: 'engine' },

    // electrical
    { value: 'flicker', labelKey: 'symptomChecker.symptoms.flicker', category: 'electrical' },
    { value: 'no-start', labelKey: 'symptomChecker.symptoms.noStart', category: 'electrical' },
    {
      value: 'battery-drain',
      labelKey: 'symptomChecker.symptoms.batteryDrain',
      category: 'electrical',
    },
    {
      value: 'warning-light',
      labelKey: 'symptomChecker.symptoms.warningLight',
      category: 'electrical',
    },
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
    { symptom: 'squeal', labelKey: 'symptomChecker.causes.wornBrakePads', mostLikely: true },
    { symptom: 'squeal', labelKey: 'symptomChecker.causes.glazedBrakePads', mostLikely: false },
    { symptom: 'squeal', labelKey: 'symptomChecker.causes.dustDebrisPadRotor', mostLikely: false },

    // brakes - grinding
    { symptom: 'grinding', labelKey: 'symptomChecker.causes.padsWornToMetal', mostLikely: true },
    { symptom: 'grinding', labelKey: 'symptomChecker.causes.damagedRotor', mostLikely: false },
    { symptom: 'grinding', labelKey: 'symptomChecker.causes.debrisInCaliper', mostLikely: false },

    // brakes - soft-pedal
    { symptom: 'soft-pedal', labelKey: 'symptomChecker.causes.airInBrakeLines', mostLikely: true },
    { symptom: 'soft-pedal', labelKey: 'symptomChecker.causes.brakeFluidLeak', mostLikely: false },
    {
      symptom: 'soft-pedal',
      labelKey: 'symptomChecker.causes.failingMasterCylinder',
      mostLikely: false,
    },
    {
      symptom: 'soft-pedal',
      labelKey: 'symptomChecker.causes.overheatedBrakeFluid',
      mostLikely: false,
    },

    // brakes - vibration
    { symptom: 'vibration', labelKey: 'symptomChecker.causes.warpedRotors', mostLikely: true },
    {
      symptom: 'vibration',
      labelKey: 'symptomChecker.causes.looseCaliperBolts',
      mostLikely: false,
    },
    {
      symptom: 'vibration',
      labelKey: 'symptomChecker.causes.unevenPadDeposits',
      mostLikely: false,
    },

    // suspension - knock
    { symptom: 'knock', labelKey: 'symptomChecker.causes.swayBarEndLinks', mostLikely: true },
    { symptom: 'knock', labelKey: 'symptomChecker.causes.controlArmBushings', mostLikely: false },
    { symptom: 'knock', labelKey: 'symptomChecker.causes.wornBallJoints', mostLikely: false },
    { symptom: 'knock', labelKey: 'symptomChecker.causes.shockAbsorberMounts', mostLikely: false },

    // suspension - pull
    { symptom: 'pull', labelKey: 'symptomChecker.causes.wheelsOutOfAlignment', mostLikely: true },
    { symptom: 'pull', labelKey: 'symptomChecker.causes.unevenTirePressure', mostLikely: false },
    { symptom: 'pull', labelKey: 'symptomChecker.causes.seizedCaliper', mostLikely: false },
    { symptom: 'pull', labelKey: 'symptomChecker.causes.wornStrut', mostLikely: false },

    // suspension - bounce
    { symptom: 'bounce', labelKey: 'symptomChecker.causes.wornShockAbsorbers', mostLikely: true },
    { symptom: 'bounce', labelKey: 'symptomChecker.causes.brokenCoilSpring', mostLikely: false },
    { symptom: 'bounce', labelKey: 'symptomChecker.causes.lowTirePressure', mostLikely: false },

    // suspension - clunk-turn
    { symptom: 'clunk-turn', labelKey: 'symptomChecker.causes.wornCvJoint', mostLikely: true },
    { symptom: 'clunk-turn', labelKey: 'symptomChecker.causes.wornTieRodEnds', mostLikely: false },
    {
      symptom: 'clunk-turn',
      labelKey: 'symptomChecker.causes.wornStrutBearing',
      mostLikely: false,
    },

    // engine - cold-squeal
    {
      symptom: 'cold-squeal',
      labelKey: 'symptomChecker.causes.wornSerpentineBelt',
      mostLikely: true,
    },
    {
      symptom: 'cold-squeal',
      labelKey: 'symptomChecker.causes.failingIdlerPulley',
      mostLikely: false,
    },
    {
      symptom: 'cold-squeal',
      labelKey: 'symptomChecker.causes.glazedBeltSurface',
      mostLikely: false,
    },

    // engine - tick
    { symptom: 'tick', labelKey: 'symptomChecker.causes.lowOilLevel', mostLikely: true },
    { symptom: 'tick', labelKey: 'symptomChecker.causes.wornValveLifters', mostLikely: false },
    {
      symptom: 'tick',
      labelKey: 'symptomChecker.causes.crackedExhaustManifold',
      mostLikely: false,
    },
    { symptom: 'tick', labelKey: 'symptomChecker.causes.wornTimingChain', mostLikely: false },

    // engine - rough-idle
    { symptom: 'rough-idle', labelKey: 'symptomChecker.causes.fouledSparkPlugs', mostLikely: true },
    { symptom: 'rough-idle', labelKey: 'symptomChecker.causes.vacuumLeak', mostLikely: false },
    {
      symptom: 'rough-idle',
      labelKey: 'symptomChecker.causes.failingIdleAirControl',
      mostLikely: false,
    },
    {
      symptom: 'rough-idle',
      labelKey: 'symptomChecker.causes.weakFuelInjector',
      mostLikely: false,
    },

    // engine - power-loss
    {
      symptom: 'power-loss',
      labelKey: 'symptomChecker.causes.cloggedFuelFilter',
      mostLikely: true,
    },
    { symptom: 'power-loss', labelKey: 'symptomChecker.causes.dirtyMafSensor', mostLikely: false },
    {
      symptom: 'power-loss',
      labelKey: 'symptomChecker.causes.blockedCatalyticConverter',
      mostLikely: false,
    },
    { symptom: 'power-loss', labelKey: 'symptomChecker.causes.failingFuelPump', mostLikely: false },

    // electrical - flicker
    { symptom: 'flicker', labelKey: 'symptomChecker.causes.weakAlternator', mostLikely: true },
    {
      symptom: 'flicker',
      labelKey: 'symptomChecker.causes.corrodedBatteryTerminals',
      mostLikely: false,
    },
    {
      symptom: 'flicker',
      labelKey: 'symptomChecker.causes.badGroundConnection',
      mostLikely: false,
    },
    {
      symptom: 'flicker',
      labelKey: 'symptomChecker.causes.failingVoltageRegulator',
      mostLikely: false,
    },

    // electrical - no-start
    {
      symptom: 'no-start',
      labelKey: 'symptomChecker.causes.faultyCrankshaftSensor',
      mostLikely: true,
    },
    { symptom: 'no-start', labelKey: 'symptomChecker.causes.failedFuelPump', mostLikely: false },
    { symptom: 'no-start', labelKey: 'symptomChecker.causes.floodedEngine', mostLikely: false },
    {
      symptom: 'no-start',
      labelKey: 'symptomChecker.causes.brokenTimingBeltChain',
      mostLikely: false,
    },

    // electrical - battery-drain
    { symptom: 'battery-drain', labelKey: 'symptomChecker.causes.parasiticDraw', mostLikely: true },
    {
      symptom: 'battery-drain',
      labelKey: 'symptomChecker.causes.oldFailingBattery',
      mostLikely: false,
    },
    {
      symptom: 'battery-drain',
      labelKey: 'symptomChecker.causes.faultyAlternatorNotCharging',
      mostLikely: false,
    },

    // electrical - warning-light
    {
      symptom: 'warning-light',
      labelKey: 'symptomChecker.causes.failingOxygenSensor',
      mostLikely: true,
    },
    { symptom: 'warning-light', labelKey: 'symptomChecker.causes.looseFuelCap', mostLikely: false },
    {
      symptom: 'warning-light',
      labelKey: 'symptomChecker.causes.catalyticConverterBelowThreshold',
      mostLikely: false,
    },
    {
      symptom: 'warning-light',
      labelKey: 'symptomChecker.causes.weakBatteryVoltageFault',
      mostLikely: false,
    },
  ];

  filteredCauses = computed(() => {
    return this.allCauses.filter((cause) => cause.symptom === this.selectedSymptom());
  });
}
