import { Module } from '@nestjs/common';
import { InvestigationService, InvestigationFilesService } from './investigation.service';
import { InvestigationController } from './investigation.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [InvestigationController],
  providers: [InvestigationService, InvestigationFilesService, PrismaService],
})
export class InvestigationModule {}
