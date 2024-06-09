import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ClinicDTO, ClinicEmployeesDTO, ClinicDetailsDTO } from './clinic.dto';

@Injectable()
export class ClinicService {
    constructor(private prisma: PrismaService) {}

    async create(dto: ClinicDTO) {
        return this.prisma.clinic.create({
            data: dto,
        });
    }

    async getAll() {
        return this.prisma.clinic.findMany();
    }

    async getById(id: number){
        const clinic = this.prisma.clinic.findUnique({
            where: { id: id, },
        });

        if (!clinic) {
            throw new NotFoundException(`Clinic with id: ${id} not found`)
        }

        return clinic
    }
}

@Injectable()
export class ClinicDetailsService {
    constructor(private prisma: PrismaService) {}

    async create(dto: ClinicDetailsDTO) {
        return this.prisma.clinicDetails.create({
            data: dto,
        });
    }

    async getAll() {
        return this.prisma.clinicDetails.findMany();
    }

    async getById(id: number) {
        return this.prisma.clinicDetails.findUnique({
            where: { clinicId: id, },
        });
    }
}

@Injectable()
export class ClinicEmployeesService {
    constructor(private prisma: PrismaService) {}

    async create(dto: ClinicEmployeesDTO) {
        return this.prisma.clinicEmployees.create({
            data: dto,
        });
    }

    async getAll() {
        return this.prisma.clinicEmployees.findMany();
    }

    async getById(clinicId: number) {
        return this.prisma.clinicEmployees.findUnique({
            where: { clinicId: clinicId, },
        });
    }

}
