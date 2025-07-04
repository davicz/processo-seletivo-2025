import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { NaviosService } from './navios.service';
import { CreateNavioDto } from './dto/create-navio.dto';
import { UpdateNavioDto } from './dto/update-navio.dto';

@Controller('navios')
export class NaviosController {
  constructor(private readonly naviosService: NaviosService) {}

  @Post()
  create(@Body() createNavioDto: CreateNavioDto) {
    return this.naviosService.create(createNavioDto);
  }

  @Get()
  findAll() {
    return this.naviosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.naviosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateNavioDto: UpdateNavioDto) {
    return this.naviosService.update(id, updateNavioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.naviosService.remove(id);
  }
}