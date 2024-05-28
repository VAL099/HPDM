import { IsInt, IsString } from "class-validator";


export class PharmacyDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    district: string;
}

export class PharmacyEmployeesDto {
    @IsInt()
    pharmacyId: number;

    @IsInt()
    staffId: number;
}