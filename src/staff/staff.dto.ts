import { IsPositive, IsString, IsOptional, IsDate } from "class-validator";

export class StaffDto{
    @IsString()
    readonly name: string;

    @IsString()
    readonly email: string;

    @IsPositive()
    readonly roleId: number;

    @IsOptional()
    @IsString()
    readonly description: string | null;
}

export class StaffRoleDto{
    @IsString()
    readonly name: string;
}

