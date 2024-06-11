import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MedicalCardDTO, MedicalCardRecordDTO } from './card.dto';

@ApiTags('medicalCard')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  async card(){
    return await this.cardService.getAll();
  }

  @Post()
  @ApiBody({ type: MedicalCardDTO })
  async cardCreate(@Body() dto: MedicalCardDTO){
    return await this.cardService.create(dto);
  }

  @Get('pacient/:pacientId')
  async cardByPacient(@Param('pacientId', ParseIntPipe) pacientId: number){
    return await this.cardService.getCardByPacienteId(pacientId);
  }

  @Get('record/:recordId')
  async cardRecord(@Param('recordId', ParseIntPipe) recordId: number){
    return await this.cardService.getRecordById(recordId);
  }

  @Get('records/:cardId')
  async cardRecords(@Param('cardId', ParseIntPipe) cardId: number){
    return await this.cardService.getCardsRecords(cardId);
  }

  @Get(':cardId')
  async cardById(@Param('id', ParseIntPipe) cardId: number){
    return await this.cardService.getById(cardId);
  }

  @Post('record')
  @ApiBody({ type: MedicalCardRecordDTO })
  async cardRecordCreate(@Body() dto: MedicalCardRecordDTO){
    return await this.cardService.createRecord(dto);
  }

}
