import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MedicalCardDTO, MedicalCardRecordDTO } from './card.dto';

@Injectable()
export class CardService {
    constructor(private prisma: PrismaService) {}

    async create(dto: MedicalCardDTO) {
        return this.prisma.medicalCard.create({
            data: dto,
        });
    }

    async getAll() {
        return this.prisma.medicalCard.findMany();
    }

    async getById(id: number){
        return this.prisma.medicalCard.findUnique({
            where: { id: id, },
        });
    }

    async createRecord(dto: MedicalCardRecordDTO) {
        return this.prisma.medicalCardRecord.create({
            data: dto,
        });
    }
    
    async getRecordById(recordId: number){
        return this.prisma.medicalCardRecord.findUnique({
            where: { id: recordId, },
        });
    }

}
