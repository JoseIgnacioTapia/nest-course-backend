import { IsString, IsOptional, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly model?: string;
}
