import { IsBoolean, IsDate, IsInt, IsOptional, IsString, } from "class-validator";

export class RecipeDTO {
    @IsInt()
    patientId: number;

    @IsInt()
    staffId: number;

    @IsDate()    
    date: Date;

    @IsString()
    medicineName: string;

    @IsInt()
    quantity: number;

    @IsString()
    @IsOptional()
    measure: string;

    @IsString()
    @IsOptional()
    instructions?: string;

    @IsString()
    @IsOptional()
    notes?: string;

    @IsBoolean()
    isActive: boolean;
}

export class ClosedRecipesDTO {
    @IsInt()
    patientId: number;

    @IsInt()
    staffId: number;

    @IsInt()
    recipeId: number;

    @IsDate()
    date: Date;

    @IsString()
    medicine: string;

    @IsInt()
    soldQuantity: number;

    @IsString()
    measure: string;

    @IsString()
    @IsOptional()
    notes?: string;
}
