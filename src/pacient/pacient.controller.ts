import { Controller } from '@nestjs/common';
import { PacientService } from './pacient.service';

@Controller('pacient')
export class PacientController {
  constructor(private readonly pacientService: PacientService) {}
}
