import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaintenanceItem } from '../models/maintenance-item.model';
import { LucideSearch, LucideInfo } from '@lucide/angular';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-service-schedule',
  imports: [FormsModule, LucideSearch, LucideInfo],
  templateUrl: './service-schedule.html',
  styleUrl: './service-schedule.css',
})
export class ServiceSchedule {
  readonly translation = inject(TranslationService);
  searchQuery = signal('');

  MAINTENANCE_ITEMS: MaintenanceItem[] = [
    {
      id: '1',
      nameKey: 'serviceSchedulePage.items.engineOilFilter',
      intervalKm: 10000,
      intervalMonth: 12,
      fuelTypes: ['petrol', 'lpg'],
    },
    {
      id: '2',
      nameKey: 'serviceSchedulePage.items.engineOilFilter',
      intervalKm: 15000,
      intervalMonth: 12,
      fuelTypes: ['diesel'],
    },
    {
      id: '3',
      nameKey: 'serviceSchedulePage.items.airFilter',
      intervalKm: 30000,
      intervalMonth: 24,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '4',
      nameKey: 'serviceSchedulePage.items.cabinFilter',
      intervalKm: 15000,
      intervalMonth: 12,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '5',
      nameKey: 'serviceSchedulePage.items.fuelFilter',
      intervalKm: 30000,
      intervalMonth: 24,
      fuelTypes: ['petrol'],
    },
    {
      id: '6',
      nameKey: 'serviceSchedulePage.items.fuelFilter',
      intervalKm: 20000,
      intervalMonth: 24,
      fuelTypes: ['diesel'],
    },
    {
      id: '7',
      nameKey: 'serviceSchedulePage.items.lpgFilter',
      intervalKm: 10000,
      intervalMonth: 12,
      fuelTypes: ['lpg'],
    },
    {
      id: '8',
      nameKey: 'serviceSchedulePage.items.sparkPlugs',
      intervalKm: 40000,
      intervalMonth: 48,
      fuelTypes: ['petrol', 'lpg'],
    },
    {
      id: '9',
      nameKey: 'serviceSchedulePage.items.timingBelt',
      intervalKm: 100000,
      intervalMonth: 60,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '10',
      nameKey: 'serviceSchedulePage.items.timingChainInspection',
      intervalKm: 120000,
      intervalMonth: 96,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '11',
      nameKey: 'serviceSchedulePage.items.brakeFluid',
      intervalKm: 30000,
      intervalMonth: 24,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '12',
      nameKey: 'serviceSchedulePage.items.coolant',
      intervalKm: 60000,
      intervalMonth: 60,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '13',
      nameKey: 'serviceSchedulePage.items.brakePadsFront',
      intervalKm: 40000,
      intervalMonth: 36,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '14',
      nameKey: 'serviceSchedulePage.items.brakePadsRear',
      intervalKm: 60000,
      intervalMonth: 48,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '15',
      nameKey: 'serviceSchedulePage.items.brakeDiscs',
      intervalKm: 80000,
      intervalMonth: 60,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '16',
      nameKey: 'serviceSchedulePage.items.transmissionFluidManual',
      intervalKm: 80000,
      intervalMonth: 72,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '17',
      nameKey: 'serviceSchedulePage.items.transmissionFluidAutomatic',
      intervalKm: 60000,
      intervalMonth: 60,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '18',
      nameKey: 'serviceSchedulePage.items.dpfCheck',
      intervalKm: 20000,
      intervalMonth: 24,
      fuelTypes: ['diesel'],
    },
    {
      id: '19',
      nameKey: 'serviceSchedulePage.items.adBlueCheck',
      intervalKm: 10000,
      intervalMonth: 12,
      fuelTypes: ['diesel'],
    },
    {
      id: '20',
      nameKey: 'serviceSchedulePage.items.wiperBlades',
      intervalKm: 15000,
      intervalMonth: 12,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '21',
      nameKey: 'serviceSchedulePage.items.batteryCheck',
      intervalKm: 20000,
      intervalMonth: 24,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '22',
      nameKey: 'serviceSchedulePage.items.tireRotation',
      intervalKm: 10000,
      intervalMonth: 12,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
  ];

  selectedFuel = signal<'petrol' | 'diesel' | 'lpg'>('petrol');

  filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const fuel = this.selectedFuel();

    return this.MAINTENANCE_ITEMS.filter((item) => {
      const translatedName = this.translation.t(item.nameKey).toLowerCase();
      const matchesQuery = translatedName.includes(query);
      const matchesFuel = item.fuelTypes.includes(fuel);

      return matchesQuery && matchesFuel;
    });
  });
}
