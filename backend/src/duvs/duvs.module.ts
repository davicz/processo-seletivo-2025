// src/duvs/duvs.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuvsService } from './duvs.service';
import { DuvsController } from './duvs.controller';
import { Duv } from './entities/duv.entity';
import { Navio } from 'src/navios/entities/navio.entity';
import { Passageiro } from 'src/passageiros/entities/passageiro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Duv, Navio, Passageiro]) 
  ],
  controllers: [DuvsController],
  providers: [DuvsService],
})
export class DuvsModule {}