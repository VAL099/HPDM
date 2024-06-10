import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsInt, IsOptional, IsString, } from "class-validator";

export class RecipeDTO {
    @IsInt()
    @ApiProperty()
    pacientId: number;

    @IsInt()
    @ApiProperty()
    staffId: number;

    @IsDate()
    @ApiProperty()    
    date: Date;

    @IsString()
    @ApiProperty()
    medicineName: string;

    @IsInt()
    @ApiProperty()
    quantity: number;

    @IsString()
    @IsOptional()
    @ApiProperty()
    measure: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    instructions?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    notes?: string;

    @IsBoolean()
    @ApiProperty()
    isActive: boolean;
}

export class ClosedRecipesDTO {
    @IsInt()
    @ApiProperty()
    pacientId: number;

    @IsInt()
    @ApiProperty()
    staffId: number;

    @IsInt()
    @ApiProperty()
    recipeId: number;

    @IsDate()
    @ApiProperty()
    date: Date;

    @IsString()
    @ApiProperty()
    medicine: string;

    @IsInt()
    @ApiProperty()
    soldQuantity: number;

    @IsString()
    @ApiProperty()
    measure: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    notes?: string;
}
