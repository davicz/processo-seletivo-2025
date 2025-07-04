// src/passageiros/dto/create-passageiro.dto.ts
import { IsString, IsNotEmpty, IsUrl, IsEnum, IsOptional } from 'class-validator';
import { TipoPassageiro } from '../entities/passageiro.entity';

export class CreatePassageiroDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEnum(TipoPassageiro)
  @IsNotEmpty()
  tipo: TipoPassageiro;

  @IsString()
  @IsOptional() // O SID é opcional
  sid?: string;

  @IsString()
  @IsNotEmpty()
  nacionalidade: string;

  @IsUrl()
  @IsNotEmpty()
  foto: string;
}