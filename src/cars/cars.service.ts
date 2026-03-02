import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCarDto } from './dto/update-car.dto';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Jeep', model: 'Cherokee' },
  ];

  create(createCarDto: CreateCarDto) {
    const car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);
    return car;
  }

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

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
