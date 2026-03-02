import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService,
  ) {}

  populateDB() {
    return 'Seed executed successfully';
  }
}
