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

    @Column()
    firstname: string; 

    @Column()
    lastname: string; 

    @Column({ default: 'Idk'}) 
    bibliography: string

    @Column({ default: 'No Phone' })
    phone: string; 

    @Column({ default: 'No Country' })
    country: string; 

    @Column({ default: 'No City' })
    city: string; 

    @Column({ default: 'No Postal Code' })
    postalcode: string; 

    @Column({ default: 'Free'}) 
    role: string;

    @Column({ default: 'No Image'}) 
    image: string

    // Un usuario puede tener muchos inventarios
    @OneToMany(() => Inventory, (inventory) => inventory.user)
    inventories: Inventory[];
}
