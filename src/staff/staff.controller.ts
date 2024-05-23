import { Controller, Get, Post, Body } from '@nestjs/common';
import { StaffService, StaffRoleService } from './staff.service';
import { StaffDto, StaffRoleDto } from './staff.dto';

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

  @Post('role')
  async createRole(@Body() dto: StaffRoleDto){
    return await this.staffRoleService.create(dto);
  }

  @Get('role')
  async role(){
    return await this.staffRoleService.get();
  }
}
