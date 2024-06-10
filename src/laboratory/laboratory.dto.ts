import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt } from "class-validator";

export class LaboratoryDTO {
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

export class LaboratoryEmployeesDTO {
    @IsInt()
    @ApiProperty()
    labId: number;

    @IsInt()
    @ApiProperty()
    staffId: number;
}
