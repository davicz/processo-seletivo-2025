import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PassageirosService } from './passageiros.service';
import { CreatePassageiroDto } from './dto/create-passageiro.dto';
import { UpdatePassageiroDto } from './dto/update-passageiro.dto';

@Controller('passageiros')
export class PassageirosController {
  constructor(private readonly passageirosService: PassageirosService) {}

  @Post()
  create(@Body() createPassageiroDto: CreatePassageiroDto) {
    return this.passageirosService.create(createPassageiroDto);
  }

  @Get()
  findAll() {
    return this.passageirosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passageirosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassageiroDto: UpdatePassageiroDto) {
    return this.passageirosService.update(+id, updatePassageiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passageirosService.remove(+id);
  }
}
