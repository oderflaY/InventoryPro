import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService { 
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  //  REGISTRO DE USUARIO
  async register(createUserDto: CreateUserDto): Promise<{ message: string }> {
    const { username, email, password } = createUserDto;

    // Verificar si el usuario o el email ya existen
    const userExists = await this.userRepository.findOne({ where: [{ username }, { email }] });
    if (userExists) {
      throw new BadRequestException('El usuario o correo ya están registrados.');
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const newUser = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    await this.userRepository.save(newUser);

    return { message: 'Usuario registrado exitosamente' };
  }

  // INICIO DE SESIÓN
  async login(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const { username, password } = loginUserDto;

    // Buscar usuario por username
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) throw new UnauthorizedException('Incorrect Username');

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Incorrect Password');

    // Generar token JWT
    const payload = { id: user.id, username: user.username, email: user.email, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    //console.log(accessToken)
    
    return { accessToken };
    
  }
}
