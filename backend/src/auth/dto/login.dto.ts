import { IsNotEmpty, Length } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'Required Username' })
  @Length(8,20, { message: 'Username must be +8 characters' }) // de 8 a 20 caracteres
  username: string;

  @IsNotEmpty({ message: 'Required Password' })
  @Length(8,20, { message: 'Password must be +8 characters' }) // de 8 a 20 caracteres
  password: string;
}
