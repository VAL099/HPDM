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

export class Investigation {
    @IsInt()
    patientId: number;

    @IsInt()
    labId: number;

    @IsInt()
    staffId: number;

    @IsDate()
    date: Date;

    @IsEnum(InvestigationType)
    type: InvestigationType;
    
    @IsString()
    description: string;
    
    @IsString()
    @IsOptional()
    notes?: string;
    
    @IsBoolean()
    isDone: boolean;
}

export class InvestigationFiles {
    @IsInt()
    recordId: number; // medical card record

    @IsInt()
    staffId: number;

    @IsString()
    name: string;

    @IsString()
    url: string;
}
