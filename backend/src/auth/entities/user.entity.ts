import { MaxLength, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Users'})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, length: 20})
    @MinLength(3) // Mínimo 3 caracteres en validación
    @MaxLength(50) // Máximo 50 caracteres en validación
    username: string;
    
    @Column({ unique: true, length: 20})
    @MinLength(5)
    @MaxLength(100)
    email: string;
    
    @Column({ type: 'text'})
    @MinLength(8)
    password: string;

    @Column({ default: 'Free'}) 
    role: string;
}
