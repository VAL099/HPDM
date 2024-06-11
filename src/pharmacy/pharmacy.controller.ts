import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { PharmacyDto, PharmacyEmployeesDto } from './pharmacy.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('pharmacy')
@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Post()
  @ApiBody({ type: PharmacyDto })
  async create(@Body() dto: PharmacyDto){
    return this.pharmacyService.create(dto);
  }

  @Get()
  async listPharmacies(){
    return this.pharmacyService.listPharmacies();
  }

  @Get(':pharmacyId')
  async pharmacyById(@Param('pharmacyId', ParseIntPipe) pharmacyId: number){
    return this.pharmacyService.getPharmacyById(pharmacyId);
  }

  @Get(':pharmacyId/employees')
  async pharmacyEmployees(@Param('pharmacyId', ParseIntPipe) pharmacyId: number){
    return this.pharmacyService.getUnitEmployees(pharmacyId);
  }

  @Post('/addEmployee')
  @ApiBody({ type: PharmacyDto })
  async addEmployee(@Body() dto: PharmacyEmployeesDto){
    return this.pharmacyService.addEmployee(dto);
  }
}
