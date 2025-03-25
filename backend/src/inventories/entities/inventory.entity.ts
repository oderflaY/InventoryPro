import { MaxLength, MinLength } from "class-validator";
import { User } from "src/auth/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Inventories' })
export class Inventory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 20 }) 
    name: string;

    // Muchos inventarios pueden ser de un usuario
    @ManyToOne(() => User, (user) => user.inventories, { onDelete: 'CASCADE' })
    user: User;
}
