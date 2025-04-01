import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class InventoriesService {
  constructor(    
    @InjectRepository(User)
    private userRepository: Repository<User>,
 
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,

  ) {}

  async createInventory(userId: string, name: string, description: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error('User not found');
    }

    const newInventory = this.inventoryRepository.create({ user, name, description});
    return this.inventoryRepository.save(newInventory);
  }

  async findByUserId(userId: string) {
    return this.inventoryRepository.find({ where: { user: { id: userId } },
    relations: ['user'], // Asegura que la relación con el usuario se cargue
    });
  }

  async update(id: string, data: Partial<Inventory>) {
    await this.inventoryRepository.update(id, data);
    return this.inventoryRepository.findOne({ where: { id } });
  }
}
