import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla' },
    { id: 2, brand: 'Honda', model: 'Civic' },
    { id: 3, brand: 'Jeep', model: 'Cherokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return car;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
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

  delete(id: number) {
    this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
