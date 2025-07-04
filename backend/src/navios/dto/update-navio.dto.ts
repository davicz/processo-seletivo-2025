// src/navios/dto/update-navio.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateNavioDto } from './create-navio.dto';

// A classe UpdateNavioDto herda todos os campos de CreateNavioDto,
// mas o PartialType() torna todos eles opcionais.
export class UpdateNavioDto extends PartialType(CreateNavioDto) {}