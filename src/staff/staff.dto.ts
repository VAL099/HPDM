import { IsInt, IsString, IsOptional, IsPhoneNumber, Matches, IsNotEmpty, IsEnum, IsDate } from "class-validator";

export class StaffDto{
    @IsString()
    readonly name: string;

    @IsString()
    // @Length(13, 13)
    @Matches(/^\d{13}$/, { message: 'IDNP must be a 13-digit number' })
    readonly idnp: string;

    @IsString()
    @Matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, { message: 'Email is invalid' })
    readonly email: string;

    @IsInt()
    readonly details: StaffDetailsDto;
}

export enum EmploymentStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    TERMINATED = 'TERMINATED',
    RETIRED = 'RETIRED',
    PROBATION = 'PROBATION',
    CONTRACT = 'CONTRACT',
    VACATION = 'VACATION',
    LEAVE_OF_ABSENCE = 'LEAVE_OF_ABSENCE',
    OTHER = 'OTHER'
}
  
export enum Departments {
    ADMINISTRATION = 'ADMINISTRATION',
    HUMAN_RESOURCES = 'HUMAN_RESOURCES',
    LABORATORY = 'LABORATORY',
    CLINICS = 'CLINICS',
    PHARMACY = 'PHARMACY',
    OTHER = 'OTHER'
}
  
export enum Position {
    DOCTOR = 'DOCTOR',
    NURSE = 'NURSE',
    TECHNICIAN = 'TECHNICIAN',
    ADMINISTRATOR = 'ADMINISTRATOR',
    RECEPTIONIST = 'RECEPTIONIST',
    PHARMACIST = 'PHARMACIST',
    LABORATORY_TECHNICIAN = 'LABORATORY_TECHNICIAN',
    CLEANER = 'CLEANER',
    SECURITY = 'SECURITY',
    DRIVER = 'DRIVER',
    FAMILY_DOCTOR = 'FAMILY_DOCTOR',
    OTHER = 'OTHER'
}


export class StaffDetailsDto{
    @IsInt()
    id: number;

    @IsInt()
    staffId: number;

    @IsOptional()
    @IsPhoneNumber(null)
    phoneNumber?: string;

    @IsDate()
    dateOfBirth: Date;

    @IsOptional()
    @IsString()
    gender?: string;

    @IsNotEmpty()
    @IsEnum(Position)
    position: string;

    @IsNotEmpty()
    @IsEnum(Departments)
    department: string; 

    @IsOptional()
    @IsDate()
    hireDate?: Date;

    @IsNotEmpty()
    @IsEnum(EmploymentStatus)
    status: string; 

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    district?: string;

    @IsOptional()
    @IsString()
    postalCode?: string;

    @IsOptional()
    @IsString()
    country?: string;

    @IsOptional()
    @IsString()
    emergencyContactName?: string;

    @IsOptional()
    @IsPhoneNumber(null)
    emergencyContactPhone?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    qualifications?: string;

    @IsOptional()
    @IsString()
    notes?: string;
}
