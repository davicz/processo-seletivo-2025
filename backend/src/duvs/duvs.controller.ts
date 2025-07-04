import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DuvsService } from './duvs.service';
import { CreateDuvDto } from './dto/create-duv.dto';
import { UpdateDuvDto } from './dto/update-duv.dto';

@Controller('duvs')
export class DuvsController {
  constructor(private readonly duvsService: DuvsService) {}

  @Post()
  create(@Body() createDuvDto: CreateDuvDto) {
    return this.duvsService.create(createDuvDto);
  }

  @Get()
  findAll() {
    return this.duvsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.duvsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDuvDto: UpdateDuvDto) {
    return this.duvsService.update(+id, updateDuvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.duvsService.remove(+id);
  }
}
