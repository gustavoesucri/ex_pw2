import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'customer'})
export class CustomerEntity {
    // ONE customer para MANY order

    //id
    @PrimaryGeneratedColumn()
    id: number;
    
    //name
    @Column({type: 'varchar', length: 255})
    name: string;

    //email
    @Column({type: 'varchar', length: 255})
    email: string;

    //cpf
    @Column({type: 'varchar', length: 11})
    cpf: string; // talvez number

    //status
    @Column({ type: 'boolean', default: false })
    status: boolean;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}
