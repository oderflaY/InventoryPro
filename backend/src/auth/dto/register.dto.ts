import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty({ message: 'Required First Name' })
    @Length(4,30, { message: 'First Name must be +4 characters' }) 
    @IsString({ message: 'Invalid First Name' })
    firstname: string;

    @IsNotEmpty({ message: 'Required Last Name' })
    @Length(6,30, { message: 'Last Name must be +6 characters' }) 
    @IsString({ message: 'Invalid Last Name' })
    lastname: string;
    
    @IsNotEmpty({ message: 'Required Username' })
    @Length(8,20, { message: 'Username must be +8 characters' }) 
    @IsString({ message: 'Invalid Username' })
    username: string;

    @IsNotEmpty({ message: 'Required Email' })
    @IsEmail({}, { message: 'Invalid Email' })
    email: string;

    @IsNotEmpty({ message: 'Required Password' })
    @Length(8,20, { message: 'Password must be +8 characters' })
    @IsString({ message: 'Invalid Password' })
    password: string;
}
