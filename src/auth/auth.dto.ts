import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator"

export enum Role {
    STAFF = 'Staff',
    PACIENT = 'Pacient',
}

export class UserCreateDTO {
    @IsString()
    @ApiProperty()
    idnp: string;
    
    @IsString()
    @ApiProperty()
    password: string;

    @IsString()
    @ApiProperty()
    role: Role;
}

export class UserLoginDTO {
    @IsString()
    @ApiProperty()
    idnp: string;
    
    @IsString()
    @ApiProperty()
    password: string;
}