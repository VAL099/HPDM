import { IsDate, IsInt, IsOptional, IsString } from "class-validator";

export class PatientDTO {
    @IsString()
    name: string;
    
    @IsString()
    idnp: string;
    
    @IsString()
    email: string;
    
    @IsString()
    phoneNumber: string;
    
    @IsString()
    @IsOptional()
    address?: string;
    
    @IsString()
    @IsOptional()
    city?: string;
    
    @IsString()
    @IsOptional()
    district?: string;
    
    @IsString()
    @IsOptional()
    postalCode?: string;
    
    @IsString()
    @IsOptional()
    country?: string;
}

export class PatientDetailsDTO {
    @IsInt()
    patientId: number;

    @IsString()
    currentMedications?: string;
    
    @IsString()
    @IsOptional()
    allergies?: string;
    
    @IsString()
    @IsOptional()
    notes?: string;
}
