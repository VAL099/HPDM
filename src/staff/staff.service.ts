import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StaffDto, StaffRoleDto } from './staff.dto';

@Injectable()
export class StaffService {
    constructor(private prisma: PrismaService) {}
    
    async create(dto: StaffDto) {
        return this.prisma.staff.create({
            data: dto,
        });
    }

    async get() {
        return this.prisma.staff.findMany();
    }
}

@Injectable()
export class StaffRoleService {
    constructor(private prisma: PrismaService) {}
    
    async create(dto: StaffRoleDto) {
        return this.prisma.staffType.create({
            data: dto,
        });
    }

    async get(){
        return this.prisma.staffType.findMany();
    }
}
