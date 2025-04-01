import { MaxLength, MinLength } from 'class-validator';
import { Inventory } from 'src/inventories/entities/inventory.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity({ name: 'Products' })
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    serialnumber: string;

    @Column()
    category: string;

    @Column()
    regularprice: string;

    @Column()
    saleprice: string;

    @Column()
    stock: string;

    @Column({ default: 'Available' })
    status: string;

    @Column('text')
    description: string;

    @Column({ nullable: true })
    imageurl: string;

    @ManyToOne(() => Inventory, (inventory) => inventory.products, { onDelete: 'CASCADE' })
    inventory: Inventory;
}
