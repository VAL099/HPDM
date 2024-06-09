import { Module } from '@nestjs/common';
import { PacientService } from './pacient.service';
import { PacientController } from './pacient.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PacientController],
  providers: [PacientService, PrismaService],
})
export class PacientModule {}
