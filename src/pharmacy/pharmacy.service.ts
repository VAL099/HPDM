import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PharmacyDto, PharmacyEmployeesDto } from './pharmacy.dto';

@Injectable()
export class PharmacyService {
    constructor(private prisma: PrismaService) {}

    async create(dto: PharmacyDto){
        return this.prisma.pharmacy.create({
            data: dto,
        });
    }

    async listPharmacies(){
        return this.prisma.pharmacy.findMany();
    }

    async getPharmacyById(id: number){
        return this.prisma.pharmacy.findUnique({
            where: { id: id, },
        });
    }

    async addEmployee(dto: PharmacyEmployeesDto){
        return this.prisma.pharmacyEmployees.create({
            data: dto,
        });
    }

    async getUnitEmployees(pharmacyId: number){
        return this.prisma.pharmacyEmployees.findMany({
            where: { pharmacyId: pharmacyId, }, 
        });
    }
}
