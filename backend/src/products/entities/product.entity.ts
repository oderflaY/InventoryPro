import { MaxLength, MinLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Products' })
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: number; 

    @Column() 
    name: string;

    @Column()
    serial_number: string;

    @Column()
    category: string;

    @Column() 
    regular_price: string;

    @Column()
    sale_price: string;

    @Column()
    stock: string;

    @Column({default: 'Available'})
    status: string;

    @Column('text')
    description: string;

    @Column({ nullable: true })
    imageurl: string;
}
