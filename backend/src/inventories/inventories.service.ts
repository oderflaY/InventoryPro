import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class InventoriesService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createInventory(userId: string, name: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error('User not found');
    }

    const newInventory = this.inventoryRepository.create({ user, name});
    return this.inventoryRepository.save(newInventory);
  }
}
