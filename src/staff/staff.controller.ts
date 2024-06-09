import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { StaffService, StaffDetailsService } from './staff.service';
import { StaffDto, StaffDetailsDto } from './staff.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('staff')
@Controller('staff')
export class StaffController {
  constructor(
    private readonly staffService: StaffService,
    private readonly staffDetailsService: StaffDetailsService,
  ) {}

  @Post()
  @ApiBody({ type: StaffDto })
  async create(@Body() dto: StaffDto){
    return await this.staffService.create(dto);
  }

  @Get()
  async staff(){
    return await this.staffService.getAll();
  }

  @Post('details')
  @ApiBody({ type: StaffDetailsDto })
  async createDetails(@Body() dto: StaffDetailsDto){
    return await this.staffDetailsService.create(dto);
  }

  @Get('details')
  async staffDetails(){
    return await this.staffDetailsService.getAll();
  }
  
  @Get('details/:staffId')
  async staffDetailsById(@Param('clinicId', ParseIntPipe) staffId: number){
    return await this.staffDetailsService.getById(staffId);
  }

}
