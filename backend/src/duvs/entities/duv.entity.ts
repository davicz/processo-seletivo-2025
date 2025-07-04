// src/duvs/entities/duv.entity.ts
import { Navio } from 'src/navios/entities/navio.entity';
import { Passageiro } from 'src/passageiros/entities/passageiro.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('duvs')
export class Duv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  numeroDuv: string;

  @Column({ type: 'date' })
  dataViagem: string;

  @ManyToOne(() => Navio, { eager: true, onDelete: 'SET NULL' })
  navio: Navio;

  @OneToMany(() => Passageiro, (passageiro: { duv: any; }) => passageiro.duv, {
    eager: true, 
    cascade: true, 
  })
  passageiros: Passageiro[];
}