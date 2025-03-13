import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty({ message: 'Required Username' })
    @Length(8,20, { message: 'Username must be +8 characters' }) // de 1 a 12 caracteres
    @IsString({ message: 'Invalid Username' })
    username: string;

    @IsNotEmpty({ message: 'Required Email' })
    @IsEmail({}, { message: 'Invalid Email' })
    email: string;

    @IsNotEmpty({ message: 'Required Password' })
    @Length(8,20, { message: 'Password must be +8 characters' }) // de 1 a 12 caracteres
    @IsString({ message: 'Invalid Password' })
    password: string;
}
