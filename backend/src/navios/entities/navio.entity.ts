import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('navios')
export class Navio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    bandeira: string;

    @Column()
    imagem: string;
}
