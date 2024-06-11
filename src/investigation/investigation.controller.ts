import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { InvestigationService, InvestigationFilesService } from './investigation.service';
import { InvestigationDTO, InvestigationFilesDTO } from './investigation.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('investigation')
@Controller('investigation')
export class InvestigationController {
  constructor(
    private readonly investigationService: InvestigationService,
    private readonly investigationFilesService: InvestigationFilesService
  ) {}

  @Post()
  @ApiBody({ type: InvestigationDTO })
  async create(@Body() dto: InvestigationDTO){
    return this.investigationService.create(dto);
  }

  @Get(':pacienteId')
  async getPacienteInvestigations(@Param('pacienteId', ParseIntPipe) pacienteId: number){
    return this.investigationService.getPacienteInvestigations(pacienteId);
  }

  @Get(':investigationId')
  async getInvestigationById(@Param('investigationId', ParseIntPipe) investigationId: number){
    return this.investigationService.getInvestigationById(investigationId);
  }

  @Put(':investigationId')
  @ApiBody({ type: InvestigationDTO })
  async updateInvestigation(
    @Param('investigationId', ParseIntPipe) investigationId: number, 
    dto: InvestigationDTO
  ){
    return this.investigationService.updateInvestigation(investigationId, dto);
  }

  @Post('/files')
  @ApiBody({ type: InvestigationFilesDTO })
  async addFile(@Body() dto: InvestigationFilesDTO){
    return this.investigationFilesService.create(dto);
  }

  @Get('/files/:recordId')
  async getInvestigationFilesFromRecord(@Param('recordId', ParseIntPipe) recordId: number){
    return this.investigationFilesService.getInvestigationFilesFromRecord(recordId);
  }

  @Get('/files/:fileId')
  async getInvestigationFileById(@Param('fileId', ParseIntPipe) fileId: number){
    return this.investigationFilesService.getInvestigationFileById(fileId);
  }
}
