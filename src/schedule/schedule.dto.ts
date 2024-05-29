import { IsBoolean, IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

enum LocationType {
    CLINIC = 'CLINIC',
    LABORATORY = 'LABORATORY',
}

export class Schedule {
    @IsInt()
    locationId: number;

    @IsEnum(LocationType)
    locationType: LocationType;

    @IsInt()
    patientId: number;

    @IsInt()
    staffId: number;

    @IsDate()
    date: Date;

    @IsString()
    reason: string;

    @IsString()
    @IsOptional()
    notes?: string;

    @IsBoolean()
    isCompleted: boolean;
}