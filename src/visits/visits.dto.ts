import { IsInt, IsDate, IsString, IsOptional } from "class-validator";

export class ClinicVisitDTO {
    @IsInt()
    patientId: number;

    @IsInt()
    clinicId: number;

    @IsInt()
    staffId: number;

    @IsDate()
    date: Date;

    @IsString()
    reason: string;

    @IsString()
    @IsOptional()
    diagnosis?: string;

    @IsString()
    @IsOptional()
    treatment?: string;

    @IsString()
    @IsOptional()
    prescription?: string;

    @IsString()
    @IsOptional()
    notes?: string;
}

export class LaboratoryVisitDTO {
    
}