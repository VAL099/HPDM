import { Module } from '@nestjs/common';
import { ClinicService, ClinicDetailsService, ClinicEmployeesService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ClinicController],
  providers: [ClinicService, ClinicDetailsService, ClinicEmployeesService, PrismaService], 
})
export class ClinicModule {}
