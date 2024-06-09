import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsOptional, IsPhoneNumber, Matches, IsNotEmpty, IsEnum, IsDate } from "class-validator";

export class StaffDto{
    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    // @Length(13, 13)
    @Matches(/^\d{13}$/, { message: 'IDNP must be a 13-digit number' })
    readonly idnp: string;

    @ApiProperty()
    @IsString()
    @Matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, { message: 'Email is invalid' })
    readonly email: string;
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
    @ApiProperty()
    @IsInt()
    staffId: number;

    @ApiProperty()
    @IsOptional()
    @IsPhoneNumber('MD', { message: 'Phone number must be a valid Moldovian phone number' })
    phoneNumber: string;

    @ApiProperty()
    @IsDate()
    dateOfBirth: Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    gender?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Position)
    position: Position;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Departments)
    department: Departments; 

    @ApiProperty()
    @IsOptional()
    @IsDate()
    hireDate?: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(EmploymentStatus)
    status: EmploymentStatus; 

    @ApiProperty()
    @IsOptional()
    @IsString()
    address?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    city?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    district?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    postalCode?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    country?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    emergencyContactName?: string;

    @ApiProperty()
    @IsOptional()
    @IsPhoneNumber(null)
    emergencyContactPhone?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    qualifications?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    notes?: string;
}
