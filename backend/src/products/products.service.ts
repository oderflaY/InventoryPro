import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Inventory } from '../inventories/entities/inventory.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>,
  @InjectRepository(Inventory) private readonly inventoryRepository: Repository<Inventory>
) { }

async create(createProductDto: CreateProductDto): Promise<Product> {
  const product = this.productRepository.create(createProductDto);
  return this.productRepository.save(product);
}

async getByInventory(inventoryId: string): Promise<Product[]> {
  return this.productRepository.find({ where: { inventory: { id: inventoryId } } });
}

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

}
