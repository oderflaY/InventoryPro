import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secreto-ultra-seguro', // Usa una variable de entorno en producción
    });
  }

  async validate(payload: any) {
    return { id: payload.id, username: payload.username, email: payload.email };
  }
}
