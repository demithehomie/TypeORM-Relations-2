import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Funcionario } from './funcionario.entity';

@Entity()
export class InformacoesDeContato {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    phone: string;
    @Column()
    email: string;

    @OneToOne(() => Funcionario)
    @JoinColumn()
    funcionario: Funcionario;

}