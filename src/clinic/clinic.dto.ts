import { IsInt, IsString, IsOptional, IsArray, IsEnum, IsDate } from 'class-validator';

export enum Services {
    CONSULTATION = 'CONSULTATION',
    DIAGNOSTICS = 'DIAGNOSTICS',
    SURGERY = 'SURGERY',
    VACCINATION = 'VACCINATION',
    PHYSIOTHERAPY = 'PHYSIOTHERAPY',
    LAB_TESTS = 'LAB_TESTS',
    IMAGING = 'IMAGING',
    EMERGENCY_CARE = 'EMERGENCY_CARE',
    MATERNITY_CARE = 'MATERNITY_CARE',
    PHARMACY = 'PHARMACY',
    MENTAL_HEALTH = 'MENTAL_HEALTH',
    NUTRITION_AND_DIET = 'NUTRITION_AND_DIET',
    REHABILITATION = 'REHABILITATION',
    TELEMEDICINE = 'TELEMEDICINE',
    HOME_HEALTH_CARE = 'HOME_HEALTH_CARE',
    DENTAL_CARE = 'DENTAL_CARE',
    PRIMARY_CARE = 'PRIMARY_CARE',
    SPECIALTY_CARE = 'SPECIALTY_CARE'
}

export enum Specializations {
    CARDIOLOGY = 'CARDIOLOGY',
    DERMATOLOGY = 'DERMATOLOGY',
    NEUROLOGY = 'NEUROLOGY',
    ORTHOPEDICS = 'ORTHOPEDICS',
    PEDIATRICS = 'PEDIATRICS',
    PSYCHIATRY = 'PSYCHIATRY',
    RADIOLOGY = 'RADIOLOGY',
    ONCOLOGY = 'ONCOLOGY',
    GASTROENTEROLOGY = 'GASTROENTEROLOGY',
    UROLOGY = 'UROLOGY',
    GYNECOLOGY = 'GYNECOLOGY',
    OPHTHALMOLOGY = 'OPHTHALMOLOGY',
    ENT = 'ENT',
    PULMONOLOGY = 'PULMONOLOGY',
    ENDOCRINOLOGY = 'ENDOCRINOLOGY',
    RHEUMATOLOGY = 'RHEUMATOLOGY',
    ALLERGY_AND_IMMUNOLOGY = 'ALLERGY_AND_IMMUNOLOGY',
    FAMILY_MEDICINE = 'FAMILY_MEDICINE'
}

export class ClinicDTO {
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    district: string;
}

export class ClinicDetailsDTO {
    @IsInt()
    id: number;

    @IsInt()
    clinicId: number;

    @IsString()
    phoneNumber: string;

    @IsString()
    email: string;

    @IsString()
    website: string;

    @IsString()
    openingHours: string;

    @IsArray()
    @IsEnum(Services, { each: true })
    services: Services[];

    @IsArray()
    @IsEnum(Specializations, { each: true })
    specializations: Specializations[];

    @IsInt()
    numberOfEmployees: number;

    @IsInt()
    numberOfStaff: number;

    @IsString()
    @IsOptional()
    notes?: string;
}

export class ClinicEmployeesDTO {
    @IsInt()
    id: number;

    @IsInt()
    clinicId: number;

    @IsInt()
    staffId: number;
}
