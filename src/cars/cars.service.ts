import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCarDto } from './dto/update-car.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Jeep', model: 'Cherokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const carDB = this.findOneById(id);

    console.log('Datos entrantes (DTO):', updateCarDto);
    console.log('Datos originales del auto (DB):', carDB);
    if (updateCarDto.brand) {
      carDB.brand = updateCarDto.brand;
    }
    if (updateCarDto.model) {
      carDB.model = updateCarDto.model;
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
