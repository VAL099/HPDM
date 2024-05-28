import { Controller } from '@nestjs/common';
import { InvestigationService } from './investigation.service';

@Controller('investigation')
export class InvestigationController {
  constructor(private readonly investigationService: InvestigationService) {}
}
