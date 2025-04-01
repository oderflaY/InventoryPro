import { User } from "src/auth/entities/user.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Inventories' })
export class Inventory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column() 
    name: string;

    @Column({ default: 'Inventary with products'}) 
    description: string;

    // Muchos inventarios pueden ser de un usuario
    @ManyToOne(() => User, (user) => user.inventories, { onDelete: 'CASCADE' })
    user: User;

    // Cada inventario puede tener muchos productos.
    @OneToMany(() => Product, (product) => product.inventory)
    products: Product[];
}
