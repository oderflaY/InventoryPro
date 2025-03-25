import { IsNotEmpty, IsString, IsUrl, Length } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({ message: 'Required Product Name' })
    @Length(3, 30, { message: 'Product Name must be +3 characters' })
    @IsString({ message: 'Invalid Product Name' })
    name: string;

    @IsNotEmpty({ message: 'Required Serial Number' })
    @Length(5, 20, { message: 'Serial Number must be +8 characters' })
    serial_number: string;

    @IsNotEmpty({ message: 'Required Category' })
    @Length(4, 20, { message: 'Category must be +4 characters' })
    @IsString({ message: 'Invalid Category' })
    category: string;

    @IsNotEmpty({ message: 'Required Regular Price' })
    regular_price: string;

    @IsNotEmpty({ message: 'Required Wholesale Price' })
    sale_price: string;

    @IsNotEmpty({ message: 'Required Stock' })
    stock: string;

    @IsNotEmpty({ message: 'Required Status' })
    @IsString({ message: 'Invalid Status' })
    status: string;

    @IsNotEmpty({ message: 'Required Description' })
    @Length(5, 250, { message: 'Description must be +5 characters' })
    @IsString({ message: 'Invalid Description' })
    description: string;

    //@IsUrl({}, { message: 'Invalid Image' })
    imageurl?: string;
}
