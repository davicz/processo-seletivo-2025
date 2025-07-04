import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateNavioDto {
  @IsString({ message: 'O nome do navio deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome do navio não pode estar vazio.' })
  nome: string;

  @IsString({ message: 'A bandeira do navio deve ser um texto.' })
  @IsNotEmpty({ message: 'A bandeira do navio não pode estar vazia.' })
  bandeira: string;

  @IsUrl({}, { message: 'A imagem deve ser uma URL válida.' })
  @IsNotEmpty({ message: 'A URL da imagem não pode estar vazia.' })
  imagem: string;
}