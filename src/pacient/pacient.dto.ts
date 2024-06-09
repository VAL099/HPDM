import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsOptional, IsString } from "class-validator";

export class PacientDTO {
    @ApiProperty()
    @IsString()
    name: string;
    
    @ApiProperty()
    @IsString()
    idnp: string;
    
    @ApiProperty()
    @IsString()
    email: string;
    
    @ApiProperty()
    @IsString()
    phoneNumber: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    address?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    city?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    district?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    postalCode?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    country?: string;
}

export class PacientDetailsDTO {
    @ApiProperty()
    @IsInt()
    pacientId: number;
    
    @ApiProperty()
    @IsString()
    currentMedications?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    allergies?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    notes?: string;
}
