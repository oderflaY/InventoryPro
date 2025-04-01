import { Module } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { InventoriesController } from './inventories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Inventory } from './entities/inventory.entity';
import { User } from 'src/auth/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inventory, User, Product]), ],  //
  controllers: [InventoriesController],
  providers: [InventoriesService],
  exports: [TypeOrmModule],                //
})
export class InventoriesModule {}
