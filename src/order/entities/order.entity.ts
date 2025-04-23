import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class OrderEntity {
    // ONE order para MANY order_item
    // MANY order para ONE customer

    @PrimaryGeneratedColumn()
    id: number;

    //Verificar melhor aqui como faz.
    customer_id: number; // FK

    @Column({type: 'date'})
    date: Date;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}
