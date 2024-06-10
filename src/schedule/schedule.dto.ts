import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

enum LocationType {
    CLINIC = 'CLINIC',
    LABORATORY = 'LABORATORY',
}

export class ScheduleDTO {
    @IsInt()
    @ApiProperty()
    locationId: number;

    @IsEnum(LocationType)
    @ApiProperty()
    locationType: LocationType;

    @IsInt()
    @ApiProperty()
    pacientId: number;

    @IsInt()
    @ApiProperty()
    staffId: number;

    @IsDate()
    @ApiProperty()
    date: Date;

    @IsString()
    @ApiProperty()
    reason: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    notes?: string;

    @IsBoolean()
    @ApiProperty()
    isCompleted: boolean;
}