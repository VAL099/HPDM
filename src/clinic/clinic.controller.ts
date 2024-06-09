import { Controller, Get, Param, Post, ParseIntPipe, Body } from '@nestjs/common';
import { ClinicService, ClinicDetailsService, ClinicEmployeesService } from './clinic.service';
import { ClinicDTO, ClinicDetailsDTO, ClinicEmployeesDTO } from './clinic.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('clinics')
@Controller('clinic')
export class ClinicController {
  constructor(
    private readonly clinicService: ClinicService,
    private readonly clinicDetailsService: ClinicDetailsService,
    private readonly clinicEmployeesService: ClinicEmployeesService
  ) {}

  @Get()
  async clinic(){
    return await this.clinicService.getAll();
  }

  @Post()
  @ApiBody({ type: ClinicDTO })
  async clinicCreate(@Body() dto: ClinicDTO){
    return await this.clinicService.create(dto);
  }

  @Get(':clinicId')
  async clinicById(@Param('clinicId', ParseIntPipe) clinicId: number){
    return await this.clinicService.getById(clinicId);
  }

  @Post('details')
  async clinicDetailsCreate(@Body() dto: ClinicDetailsDTO){
    return await this.clinicDetailsService.create(dto);
  }

  @Get('details')
  async clinicDetails(){
    return await this.clinicDetailsService.getAll();
  }

  @Get('details/:clinicId')
  async clinicDetailsByClinicId(@Param('clinicId', ParseIntPipe) clinicId: number){
    return await this.clinicDetailsService.getById(clinicId);
  }
  
  @Post('employees')
  @ApiBody({ type: ClinicEmployeesDTO })
  async clinicEmployeesCreate(@Body() dto: ClinicEmployeesDTO){
    return await this.clinicEmployeesService.create(dto);
  }

  @Get('employees')
  async clinicEmployees(){
    return await this.clinicEmployeesService.getAll();
  }

  @Get('employees/:clinicId')
  async clinicEmployeesByClinicId(@Param('clinicId', ParseIntPipe) clinicId: number){
    return await this.clinicEmployeesService.getById(clinicId);
  }

}
