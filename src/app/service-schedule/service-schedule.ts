import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaintenanceItem } from '../models/maintenance-item.model';

@Component({
  selector: 'app-service-schedule',
  imports: [FormsModule],
  templateUrl: './service-schedule.html',
  styleUrl: './service-schedule.css',
})
export class ServiceSchedule {
  searchQuery = signal('');

  //Table data
  MAINTENANCE_ITEMS: MaintenanceItem[] = [
    {
      id: '1',
      name: 'Engine oil & filter',
      intervalKm: 10000,
      intervalMonth: 12,
      fuelTypes: ['petrol', 'lpg'],
    },
    {
      id: '2',
      name: 'Engine oil & filter',
      intervalKm: 15000,
      intervalMonth: 12,
      fuelTypes: ['diesel'],
    },

    {
      id: '3',
      name: 'Air filter',
      intervalKm: 30000,
      intervalMonth: 24,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },

    {
      id: '4',
      name: 'Cabin (pollen) filter',
      intervalKm: 15000,
      intervalMonth: 12,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },

    { id: '5', name: 'Fuel filter', intervalKm: 30000, intervalMonth: 24, fuelTypes: ['petrol'] },
    { id: '6', name: 'Fuel filter', intervalKm: 20000, intervalMonth: 24, fuelTypes: ['diesel'] },
    { id: '7', name: 'LPG filter', intervalKm: 10000, intervalMonth: 12, fuelTypes: ['lpg'] },

    {
      id: '8',
      name: 'Spark plugs',
      intervalKm: 40000,
      intervalMonth: 48,
      fuelTypes: ['petrol', 'lpg'],
    },

    {
      id: '9',
      name: 'Timing belt',
      intervalKm: 100000,
      intervalMonth: 60,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '10',
      name: 'Timing chain inspection',
      intervalKm: 120000,
      intervalMonth: 96,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },

    {
      id: '11',
      name: 'Brake fluid',
      intervalKm: 30000,
      intervalMonth: 24,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '12',
      name: 'Coolant',
      intervalKm: 60000,
      intervalMonth: 60,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '13',
      name: 'Brake pads (front)',
      intervalKm: 40000,
      intervalMonth: 36,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '14',
      name: 'Brake pads (rear)',
      intervalKm: 60000,
      intervalMonth: 48,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '15',
      name: 'Brake discs',
      intervalKm: 80000,
      intervalMonth: 60,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },

    {
      id: '16',
      name: 'Transmission fluid (manual)',
      intervalKm: 80000,
      intervalMonth: 72,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '17',
      name: 'Transmission fluid (automatic)',
      intervalKm: 60000,
      intervalMonth: 60,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },

    {
      id: '18',
      name: 'Diesel particulate filter (DPF) check',
      intervalKm: 20000,
      intervalMonth: 24,
      fuelTypes: ['diesel'],
    },
    {
      id: '19',
      name: 'AdBlue/SCR system check',
      intervalKm: 10000,
      intervalMonth: 12,
      fuelTypes: ['diesel'],
    },

    {
      id: '20',
      name: 'Wiper blades',
      intervalKm: 15000,
      intervalMonth: 12,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '21',
      name: 'Battery check',
      intervalKm: 20000,
      intervalMonth: 24,
      fuelTypes: ['petrol', 'diesel', 'lpg'],
    },
    {
      id: '22',
      name: 'Tire rotation',
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
      const matchesQuery = item.name.toLowerCase().includes(query);
      const matchesFuel = item.fuelTypes.includes(fuel);

      return matchesQuery && matchesFuel;
    });
  });
}
