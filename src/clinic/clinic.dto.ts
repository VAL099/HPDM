import { ApiProperty } from '@nestjs/swagger';
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

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    city: string;

    @ApiProperty()
    @IsString()
    district: string;
}

export class ClinicDetailsDTO {

    @ApiProperty()
    @IsInt()
    clinicId: number;

    @ApiProperty()
    @IsString()
    phoneNumber: string;

    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    website: string;

    @ApiProperty()
    @IsString()
    openingHours: string;

    @ApiProperty()
    @IsArray()
    @IsEnum(Services, { each: true })
    services: Services[];

    @ApiProperty()
    @IsArray()
    @IsEnum(Specializations, { each: true })
    specializations: Specializations[];

    @ApiProperty()
    @IsInt()
    numberOfEmployees: number;

    @ApiProperty()
    @IsInt()
    numberOfStaff: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    notes?: string;
}

export class ClinicEmployeesDTO {
    
    @ApiProperty({'description': 'Take this from `/clinic` endpoint'})
    @IsInt()
    clinicId: number;

    @ApiProperty({'description': 'Take this from `/staff` endpoint'})
    @ApiProperty()
    @IsInt()
    staffId: number;
}
