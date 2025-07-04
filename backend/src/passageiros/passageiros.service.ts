import { Injectable } from '@nestjs/common';
import { CreatePassageiroDto } from './dto/create-passageiro.dto';
import { UpdatePassageiroDto } from './dto/update-passageiro.dto';

@Injectable()
export class PassageirosService {
  create(createPassageiroDto: CreatePassageiroDto) {
    return 'This action adds a new passageiro';
  }

  findAll() {
    return `This action returns all passageiros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passageiro`;
  }

  update(id: number, updatePassageiroDto: UpdatePassageiroDto) {
    return `This action updates a #${id} passageiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} passageiro`;
  }
}
