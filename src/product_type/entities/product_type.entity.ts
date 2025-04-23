import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductTypeEntity {
    // ONE product_type para MANY product

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar', length: 255})
    name: string;

    @Column({type:'boolean', default: false})
    status: boolean;
    
    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}
