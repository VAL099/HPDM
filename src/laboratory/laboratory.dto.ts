import { IsString, IsInt } from "class-validator";

export class Laboratory {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    district: string;
}

export class LaboratoryEmployees {
    @IsInt()
    labId: string;

    @IsInt()
    staffId: string;
}