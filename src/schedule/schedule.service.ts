import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ScheduleDTO } from './schedule.dto';

@Injectable()
export class ScheduleService {
    constructor(private prisma: PrismaService) {}

    async create(dto: ScheduleDTO){
        return this.prisma.schedule.create({
            data: dto,
        });
    }

    async getPacienteSchedules(pacienteId: number){
        return this.prisma.schedule.findMany({
            where: { pacientId: pacienteId, },
        });
    }

    async getStaffSchedules(staffId: number){
        return this.prisma.schedule.findMany({
            where: { staffId: staffId, },
        });
    }

    async getLocationSchedules(locationId: number){
        return this.prisma.schedule.findMany({
            where: { locationId: locationId, },
        });
    }
}
