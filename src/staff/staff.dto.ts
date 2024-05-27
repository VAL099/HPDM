import { IsPositive, IsString, IsOptional, Length, Matches } from "class-validator";

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

    @IsPositive()
    readonly roleId: number;

    @IsOptional()
    @IsString()
    readonly description: string | null;
}


