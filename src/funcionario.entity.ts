import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'

@Entity()
export class Funcionario{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    managerID: number;

  //  @OneToOne(() => )
}