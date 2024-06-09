import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PacientDTO, PacientDetailsDTO } from './pacient.dto';

@Injectable()
export class PacientService {
    constructor(private prisma: PrismaService) {}

    async create(dto: PacientDTO) {
        return this.prisma.pacient.create({
            data: dto,
        });
    }

    async getAll() {
        return this.prisma.pacient.findMany();
    }

    async getById(id: number){
        return this.prisma.pacient.findUnique({
            where: { id: id, },
        });
    }

    async createPacientDetails(dto: PacientDetailsDTO) {
        return this.prisma.pacientDetails.create({
            data: dto,
        });
    }

    async getAllPacientDetails() {
        return this.prisma.pacientDetails.findMany();
    }

    async getPacientDetailsById(pacientId: number){
        return this.prisma.pacientDetails.findUnique({
            where: { id: pacientId, },
        });
    }
}
