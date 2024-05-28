import { IsInt, IsString, IsDate, IsOptional } from 'class-validator';

export class MedicalCardDTO { // creation
    @IsInt()
    patientId: number;
}

export class MedicalCardRecordDTO {
    @IsInt()
    cardId: number;

    @IsDate()
    date: Date;

    @IsInt()
    doctorId: number;

    @IsString()
    diagnosis: string;

    @IsString()
    @IsOptional()
    treatment?: string;

    @IsString()
    @IsOptional()
    notes?: string;
}
