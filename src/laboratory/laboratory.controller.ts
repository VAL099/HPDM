import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LaboratoryDTO, LaboratoryEmployeesDTO } from './laboratory.dto';

@ApiTags('laboratory')
@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get()
  async laboratory(){
    return await this.laboratoryService.getAll();
  }

  @Post()
  @ApiBody({ type: LaboratoryDTO })
  async laboratoryCreate(@Body() dto: LaboratoryDTO){
    return await this.laboratoryService.create(dto);
  }

  @Get(':labId')
  async laboratoryById(@Param('id', ParseIntPipe) labId: number){
    return await this.laboratoryService.getById(labId);
  }

  @Post('employee')
  async newEmployee(@Body() dto: LaboratoryEmployeesDTO){
    return await this.laboratoryService.addEmployee(dto);
  }

  @Get('employees/:labId')
  async labEmployees(@Param('labId', ParseIntPipe) labId: number){
    return await this.laboratoryService.getUnitEmployees(labId);
  }
}
