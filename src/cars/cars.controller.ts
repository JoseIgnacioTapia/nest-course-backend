import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  // ParseIntPipe es un "Pipe" que valida que el 'id' sea un número automáticamente
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.delete(id);
  }
}
