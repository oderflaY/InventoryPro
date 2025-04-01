import { Inventory } from "src/inventories/entities/inventory.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Users'}) 
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, length: 20})
    username: string;
    
    @Column({ unique: true, length: 20})
    email: string;
    
    @Column({ type: 'text'})
    password: string; 

    @Column({ default: ' ' })
    firstname: string; 

    @Column({ default: ' ' })
    lastname: string; 

    @Column({ default: '+' })
    phone: string; 

    @Column({ default: ' ' })
    country: string; 

    @Column({ default: ' ' })
    city: string; 

    @Column({ default: '#' })
    postalcode: string; 

    @Column({ default: 'Free'}) 
    role: string;

    // Un usuario puede tener muchos inventarios
    @OneToMany(() => Inventory, (inventory) => inventory.user)
    inventories: Inventory[];
}
