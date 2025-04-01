import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    serialnumber: string;

    @IsNotEmpty()
    category: string;   

    @IsNotEmpty()
    regularprice: string;

    @IsNotEmpty()
    saleprice: string;

    @IsNotEmpty()
    stock: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    description: string;

    imageurl?: string;

    @IsUUID()
    inventoryId: string;
}
