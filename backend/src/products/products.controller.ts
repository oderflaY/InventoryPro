import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    console.log('Datos recibidos en el backend:', createProductDto);
    return this.productsService.create(createProductDto);
  }

  @Get('inventory/:inventoryId')
  async getByInventory(@Param('inventoryId') inventoryId: string) {
    const products = await this.productsService.getByInventory(inventoryId);
    return { products };
  }

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
}
