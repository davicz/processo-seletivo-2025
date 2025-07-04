// src/duvs/dto/create-duv.dto.ts
import { IsString, IsNotEmpty, IsDateString, IsInt, IsArray, IsOptional } from 'class-validator';

export class CreateDuvDto {
  @IsString()
  @IsNotEmpty()
  numeroDuv: string;

  @IsDateString() 
  @IsNotEmpty()
  dataViagem: string;

  @IsInt() 
  @IsNotEmpty()
  navioId: number; 

  @IsArray() 
  @IsInt({ each: true }) 
  @IsOptional() 
  passageirosIds?: number[]; 
}