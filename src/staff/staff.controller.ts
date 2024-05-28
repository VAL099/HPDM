import { Controller, Get, Post, Body } from '@nestjs/common';
import { StaffService, StaffRoleService } from './staff.service';
import { StaffDto } from './staff.dto';

@Controller('staff')
export class StaffController {
  constructor(
    private readonly staffService: StaffService,
    private readonly staffRoleService: StaffRoleService,
  ) {}

  @Get()
  async staff(){
    return await this.staffService.get();
  }

  @Post()
  async create(@Body() dto: StaffDto){
    return await this.staffService.create(dto);
  }
}
