export interface MaintenanceItem {
  id: string;
  nameKey: string;
  intervalKm: number;
  intervalMonth: number;
  fuelTypes: ('petrol' | 'diesel' | 'lpg')[];
}
