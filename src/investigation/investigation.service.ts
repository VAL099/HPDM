import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { InvestigationDTO, InvestigationFilesDTO } from './investigation.dto';

@Injectable()
export class InvestigationService {
    constructor(private prisma: PrismaService) {}

    async create(dto: InvestigationDTO){
        return this.prisma.investigation.create({
            data: dto,
        });
    }

    async getPacienteInvestigations(pacienteId: number){
        return this.prisma.investigation.findMany({
            where: { pacientId: pacienteId, },
        });
    }

    async getInvestigationById(investigationId: number){
        return this.prisma.investigation.findUnique({
            where: { id: investigationId, },
        });
    }

    async updateInvestigation(investigationId: number, dto: InvestigationDTO){
        return this.prisma.investigation.update({
            where: { id: investigationId, },
            data: dto,
        });
    }
}

@Injectable()
export class InvestigationFilesService {
    constructor(private prisma: PrismaService) {}

    async create(dto: InvestigationFilesDTO){
        return this.prisma.investigationFiles.create({
            data: dto,
        });
    }

    async getInvestigationFilesFromRecord(recordId: number){
        // return all files from a specific card record
        return this.prisma.investigationFiles.findMany({
            where: { recordId: recordId, },
        });
    }

    async getInvestigationFileById(fileId: number){
        return this.prisma.investigationFiles.findUnique({
            where: { id: fileId, },
        });
    }
}
