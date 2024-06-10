import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LaboratoryDTO, LaboratoryEmployeesDTO } from './laboratory.dto';

@Injectable()
export class LaboratoryService {
    constructor(private prisma: PrismaService) {}

    async create(dto: LaboratoryDTO) {
        return this.prisma.laboratory.create({
            data: dto,
        });
    }
    
    async getAll() {
        return this.prisma.laboratory.findMany();
    }

    async getById(id: number){
        return this.prisma.laboratory.findUnique({
            where: { id: id, },
        });
    }

    async addEmployee(dto: LaboratoryEmployeesDTO){
        return this.prisma.laboratoryEmployees.create({
            data: dto
        });
    }

    async getUnitEmployees(unitId: number){
        return this.prisma.laboratoryEmployees.findMany({
            where: { labId: unitId, },
        });
    }
}
