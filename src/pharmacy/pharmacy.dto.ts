import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";


export class PharmacyDto {
    @IsString()
    @ApiProperty()
    name: string;

    @IsString()
    @ApiProperty()
    address: string;

    @IsString()
    @ApiProperty()
    city: string;

    @IsString()
    @ApiProperty()
    district: string;
}

export class PharmacyEmployeesDto {
    @IsInt()
    @ApiProperty()
    pharmacyId: number;

    @IsInt()
    @ApiProperty()
    staffId: number;
}
