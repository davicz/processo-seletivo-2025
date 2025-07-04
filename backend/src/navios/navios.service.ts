import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNavioDto } from './dto/create-navio.dto';
import { UpdateNavioDto } from './dto/update-navio.dto';
import { Navio } from './entities/navio.entity';

@Injectable()
export class NaviosService {
  constructor(
    @InjectRepository(Navio)
    private readonly navioRepository: Repository<Navio>,
  ) {}

  create(createNavioDto: CreateNavioDto): Promise<Navio> {
    const navio = this.navioRepository.create(createNavioDto);
    return this.navioRepository.save(navio);
  }

  findAll(): Promise<Navio[]> {
    return this.navioRepository.find();
  }

  async findOne(id: number): Promise<Navio> {
    const navio = await this.navioRepository.findOneBy({ id });
    if (!navio) {
      throw new NotFoundException(`Navio com o ID ${id} não encontrado.`);
    }
    return navio;
  }

  async update(id: number, updateNavioDto: UpdateNavioDto): Promise<Navio> {
    const navio = await this.navioRepository.preload({
      id: id,
      ...updateNavioDto,
    });
    if (!navio) {
      throw new NotFoundException(`Navio com o ID ${id} não encontrado.`);
    }
    return this.navioRepository.save(navio);
  }

  async remove(id: number): Promise<void> {
    const navio = await this.findOne(id);
    await this.navioRepository.remove(navio);
  }
}