import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsDate, IsOptional } from 'class-validator';

export class MedicalCardDTO { // creation
    @IsInt()
    @ApiProperty()
    pacientId: number;
}

export class MedicalCardRecordDTO {
    @IsInt()
    @ApiProperty()
    cardId: number;

    @IsInt()
    @ApiProperty()
    doctorId: number;

    @IsString()
    @ApiProperty()
    diagnosis: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    treatment?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    notes?: string;
}
