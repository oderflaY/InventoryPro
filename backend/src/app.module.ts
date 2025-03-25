import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { InventoriesModule } from './inventories/inventories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://inventorypro_user:KzgA4c2YnObjLMbNItCbbEI6v7FPJSLF@dpg-cva4iuqj1k6c739er7a0-a.oregon-postgres.render.com/inventorypro', // Carga la URL desde el .env
      entities: [User], 
      synchronize: true, // Solo en desarrollo
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false, // Necesario para Render
      },
    }),
    AuthModule,
    UsersModule,
    ProductsModule,
    InventoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
