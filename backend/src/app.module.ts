import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Permite que las variables de entorno estén disponibles en toda la app
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://inventorypro_user:KzgA4c2YnObjLMbNItCbbEI6v7FPJSLF@dpg-cva4iuqj1k6c739er7a0-a.oregon-postgres.render.com/inventorypro', // Carga la URL desde el .env
      entities: [User], 
      synchronize: true, // Solo en desarrollo, en producción usa migrations
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false, // Necesario para Render y Neon.tech 
      },
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
