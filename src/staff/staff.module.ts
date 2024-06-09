import { Module } from '@nestjs/common';
import { StaffService, StaffDetailsService } from './staff.service';
import { StaffController } from './staff.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StaffController],
  providers: [StaffService, StaffDetailsService, PrismaService],
})
export class StaffModule {}
