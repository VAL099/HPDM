import { Module } from '@nestjs/common';
import { StaffService, StaffRoleService } from './staff.service';
import { StaffController } from './staff.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StaffController],
  providers: [StaffService, StaffRoleService, PrismaService],
})
export class StaffModule {}
