import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Inventory } from 'src/inventories/entities/inventory.entity';

@Module({
  imports: [
  TypeOrmModule.forFeature([Product, Inventory ]), ],  //  
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [TypeOrmModule],                //
})
export class ProductsModule {}
