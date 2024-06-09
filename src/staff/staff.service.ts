import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StaffDto, StaffDetailsDto } from './staff.dto';

@Injectable()
export class StaffService {
    constructor(private prisma: PrismaService) {}
    
    async create(dto: StaffDto) {
        return this.prisma.staff.create({
            data: dto,
        });
    }

    async getAll() {
        return this.prisma.staff.findMany();
    }

    async getByIdnp(idnp: string) {
        return this.prisma.staff.findUnique({
            where: { idnp: idnp, }
        })
    }
}

@Injectable()
export class StaffDetailsService {
    constructor(private prisma: PrismaService) {}
    
    async create(dto: StaffDetailsDto) {
        return this.prisma.staffDetails.create({
            data: dto,
        });
    }

    async getAll() {
        return this.prisma.staffDetails.findMany();
    }

    async getById(id: number) {
        return this.prisma.staffDetails.findUnique({
            where: { staffId: id, },
        });
    }
}

