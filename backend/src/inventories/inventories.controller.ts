import { Controller, Get, Post, Body, Param, Req, Query, Put } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { Inventory } from './entities/inventory.entity';

@Controller('inventories')
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}

  //Añadir un inventario relaciona al id del usuario con token
  @Post()
  async addInventory(@Body() body) {
    const userId = body.userId; 
    return this.inventoriesService.createInventory(userId, body.name, body.description);
  }

  @Get('user')
  async getUserInventories(@Req() req) {
    const userId = req.headers['user-id']; // Extraer el ID del usuario desde los headers
    if (!userId) return { message: 'User ID is required' };

    return this.inventoriesService.findByUserId(String(userId));
  }

  @Put(':id')
  async updateInventory(@Param('id') id: string, @Body() data: { name: string; description: string }) {
    return this.inventoriesService.update(id, data);
  }
  
}
