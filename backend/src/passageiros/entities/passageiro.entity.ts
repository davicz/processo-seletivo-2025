
import { Duv } from 'src/duvs/entities/duv.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export enum TipoPassageiro {
  PASSAGEIRO = 'Passageiro',
  TRIPULANTE = 'Tripulante',
}

@Entity('passageiros') 
export class Passageiro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({
    type: 'simple-enum',
    enum: TipoPassageiro,
  })
  tipo: TipoPassageiro;

  @Column({ nullable: true }) 
  sid?: string;

  @Column()
  nacionalidade: string;

  @Column()
  foto: string; 

  @ManyToOne(() => Duv, (duv: { passageiros: any; }) => duv.passageiros, { onDelete: 'CASCADE' })
  duv: Duv;
}