import { Controller, Post, Get, Body } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ScheduleDTO } from './schedule.dto';

@ApiTags('schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  @ApiBody({ type: ScheduleDTO})
  async createSchedule(@Body() dto: ScheduleDTO){
    return this.scheduleService.create(dto);
  }

  @Get('paciente/:id')
  async getPacienteSchedules(pacienteId: number){
    return this.scheduleService.getPacienteSchedules(pacienteId);
  }

  @Get('staff/:id')
  async getStaffSchedules(staffId: number){
    return this.scheduleService.getStaffSchedules(staffId);
  }

  @Get('location/:id')
  async getLocationSchedules(locationId: number){
    return this.scheduleService.getLocationSchedules(locationId);
  }
  
}
