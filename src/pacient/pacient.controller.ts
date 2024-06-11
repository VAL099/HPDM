import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PacientService } from './pacient.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { PacientDTO, PacientDetailsDTO } from './pacient.dto';

@ApiTags('pacient')
@Controller('pacient')
export class PacientController {
  constructor(private readonly pacientService: PacientService) {}

  @Get()
  async getAllPacients() {
    return this.pacientService.getAll();
  }

  @Post()
  @ApiBody({ type: PacientDTO })
  async createPacient(@Body() dto: PacientDTO) {
    return this.pacientService.create(dto);
  }

  @Get(':pacientId')
  async getPacientById(@Param('pacientId', ParseIntPipe) pacientId: number) {
    return this.pacientService.getById(pacientId);
  }

  @Get('details')
  async getAllPacientDetails() {
    return this.pacientService.getAllPacientDetails();
  }

  @Get('details/:pacientId')
  async getPacientDetailsById(@Param('pacientId', ParseIntPipe) pacientId: number) {
    return this.pacientService.getPacientDetailsById(pacientId);
  }

  @Post('details')
  @ApiBody({ type: PacientDetailsDTO })
  async createPacientDetails(@Body() dto: PacientDetailsDTO) {
    return this.pacientService.createPacientDetails(dto);
  }
}
