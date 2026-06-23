export interface MaintenanceItem {
  id: string;
  name: string;
  intervalKm: number;
  intervalMonth: number;
  fuelTypes: ('petrol' | 'diesel' | 'lpg')[];
}
