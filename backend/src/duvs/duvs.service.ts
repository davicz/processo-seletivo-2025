import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Navio } from 'src/navios/entities/navio.entity';
import { Passageiro } from 'src/passageiros/entities/passageiro.entity';
import { In, Repository } from 'typeorm';
import { CreateDuvDto } from './dto/create-duv.dto';
import { UpdateDuvDto } from './dto/update-duv.dto';
import { Duv } from './entities/duv.entity';

@Injectable()
export class DuvsService {
  constructor(
    @InjectRepository(Duv)
    private readonly duvRepository: Repository<Duv>,

    @InjectRepository(Navio)
    private readonly navioRepository: Repository<Navio>,
    
    @InjectRepository(Passageiro)
    private readonly passageiroRepository: Repository<Passageiro>,
  ) {}

  async create(createDuvDto: CreateDuvDto): Promise<Duv> {
    const { navioId, passageirosIds, ...duvData } = createDuvDto;

    const navio = await this.navioRepository.findOneBy({ id: navioId });
    if (!navio) {
      throw new NotFoundException(`Navio com o ID ${navioId} não encontrado.`);
    }

    let passageiros: Passageiro[] = [];
    if (passageirosIds && passageirosIds.length > 0) {
      passageiros = await this.passageiroRepository.findBy({
        id: In(passageirosIds),
      });
    }
    
    const novaDuv = this.duvRepository.create({
      ...duvData,
      navio,
      passageiros,
    });

    return this.duvRepository.save(novaDuv);
  }
  
  findAll(): Promise<Duv[]> {
    // Graças ao 'eager: true' nas entidades, os relacionamentos virão juntos.
    return this.duvRepository.find();
  }

  // MÉTODO FINDONE QUE ESTAVA FALTANDO
  async findOne(id: number): Promise<Duv> {
    const duv = await this.duvRepository.findOneBy({ id });
    if (!duv) {
      throw new NotFoundException(`DUV com o ID ${id} não encontrada.`);
    }
    return duv;
  }

  // MÉTODO UPDATE QUE ESTAVA FALTANDO
  async update(id: number, updateDuvDto: UpdateDuvDto): Promise<Duv> {
    // A lógica de update para DTOs com relacionamentos pode ser mais complexa,
    // mas esta é uma implementação básica que atualiza os campos diretos da DUV.
    const duv = await this.duvRepository.preload({
      id: id,
      ...updateDuvDto,
    });
    if (!duv) {
      throw new NotFoundException(`DUV com o ID ${id} não encontrada.`);
    }
    return this.duvRepository.save(duv);
  }

  // MÉTODO REMOVE QUE ESTAVA FALTANDO
  async remove(id: number): Promise<void> {
    const duv = await this.findOne(id); // Reutiliza o findOne para checar se existe
    await this.duvRepository.remove(duv);
  }
}