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

  async register(createUserDto: CreateUserDto): Promise<{ message: string }> {
    const { username, email, password } = createUserDto;


    const userExists = await this.userRepository.findOne({ where: [{ username }, { email }] });
    if (userExists) {
      throw new BadRequestException('El usuario o correo ya están registrados.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      firstname: createUserDto.firstname,
      lastname: createUserDto.lastname,
      username: createUserDto.username,
      email: createUserDto.email,
      password: hashedPassword,
    });

    await this.userRepository.save(newUser);

    return { message: 'Usuario registrado exitosamente' };
  }

  async login(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const { username, password } = loginUserDto;

    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) throw new UnauthorizedException('Incorrect Username');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Incorrect Password');

    const payload = { id: user.id, username: user.username,email: user.email, role: user.role, firstname: user.firstname, lastname: user.lastname, bibliography: user.bibliography , phone: user.phone, country: user.country, city: user.city, postalcode: user.postalcode, image: user.image };
    const accessToken = this.jwtService.sign(payload);
    //console.log(accessToken)
    
    return { accessToken };
    
  }
}
