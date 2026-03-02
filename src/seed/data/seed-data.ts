import { v4 as uuid } from 'uuid';

export const CARS_SEED = [
  { id: uuid(), brand: 'Toyota', model: 'Corolla' },
  { id: uuid(), brand: 'Honda', model: 'Civic' },
  { id: uuid(), brand: 'Jeep', model: 'Cherokee' },
];

export const BRANDS_SEED = [
  { id: uuid(), name: 'toyota', createdAt: new Date().getTime() },
  { id: uuid(), name: 'honda', createdAt: new Date().getTime() },
  { id: uuid(), name: 'jeep', createdAt: new Date().getTime() },
];
