import { Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity()
export class OrderItemEntity {
    // MANY order_item para ONE order
    // MANY order_item para ONE product

    //Verificar
    order_id: number; //FK

    product_id: number; // FK

    @Column({type: 'numeric'})
    quantity: number;

    @CreateDateColumn()
    createdAt?: Date;
    
    @UpdateDateColumn()
    updatedAt?: Date;
}
