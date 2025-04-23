import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductEntity {
    // ONE product para MANY order_item
    // MANY product para ONE product_type
    // MANY product para ONE manufacturer

    @PrimaryGeneratedColumn()
    id: number;

    type_id: number; //FK

    manufacturer_id: number; //FK

    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({type:'numeric'})
    value: number;

    @Column({type: 'boolean', default: false})
    status: boolean;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}
