import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NaviosService } from './navios.service';
import { NaviosController } from './navios.controller';
import { Navio } from './entities/navio.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Navio]), 
  ],
  controllers: [NaviosController],
  providers: [NaviosService],
})
export class NaviosModule {}