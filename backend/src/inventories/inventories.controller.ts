import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('inventories')
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}


  @Post()
  async addInventory(@Body() body) {
    console.log("Body recibido:", body);
    const userId = body.userId; 
    return this.inventoriesService.createInventory(userId, body.name);
  }
}
