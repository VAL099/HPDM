import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffModule } from './staff/staff.module';
import { ClinicModule } from './clinic/clinic.module';
import { ScheduleModule } from './schedule/schedule.module';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { PacientModule } from './pacient/pacient.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { CardsModule } from './cards/cards.module';
import { CardModule } from './card/card.module';
import { InvestigationModule } from './investigation/investigation.module';
import { RecipeModule } from './recipe/recipe.module';
import { VisitsModule } from './visits/visits.module';
import { InvestigationsModule } from './investigations/investigations.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [StaffModule, ClinicModule, ScheduleModule, LaboratoryModule, PacientModule, PharmacyModule, CardsModule, InvestigationsModule, VisitsModule, RecipeModule, InvestigationModule, CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
