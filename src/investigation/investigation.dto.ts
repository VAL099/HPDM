import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsString, IsBoolean, IsEnum, IsOptional } from "class-validator";

enum InvestigationType {
    BLOOD_ANALYSIS = 'BLOOD_ANALYSIS',
    URINE_ANALYSIS = 'URINE_ANALYSIS',
    STOOL_ANALYSIS = 'STOOL_ANALYSIS',
    BIOPSY = 'BIOPSY',
    IMAGING = 'IMAGING',
    ECG = 'ECG',
    EEG = 'EEG',
    ECHO = 'ECHO',
    MRI = 'MRI',
    CT_SCAN = 'CT_SCAN',
    ULTRASOUND = 'ULTRASOUND',
    X_RAY = 'X_RAY',
    ENDOSCOPY = 'ENDOSCOPY',
    COLONOSCOPY = 'COLONOSCOPY',
    OTHER = 'OTHER',
}

export class InvestigationDTO {
    @IsInt()
    @ApiProperty()
    pacientId: number;

    @IsInt()
    @ApiProperty()
    labId: number;

    @IsInt()
    @ApiProperty()
    staffId: number;

    @IsDate()
    @ApiProperty()
    date: Date;

    @IsEnum(InvestigationType)
    @ApiProperty()
    type: InvestigationType;
    
    @IsString()
    @ApiProperty()
    description: string;
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    notes?: string;
    
    @IsBoolean()
    @ApiProperty()
    isDone: boolean;
}

export class InvestigationFilesDTO {
    @IsInt()
    @ApiProperty()
    recordId: number; // medical card record

    @IsInt()
    @ApiProperty()
    staffId: number;

    @IsString()
    @ApiProperty()
    name: string;

    @IsString()
    @ApiProperty()
    url: string;
}
