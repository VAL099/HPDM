import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffModule } from './staff/staff.module';
import { ClinicModule } from './clinic/clinic.module';
import { ScheduleModule } from './schedule/schedule.module';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { PacientModule } from './pacient/pacient.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { CardModule } from './card/card.module';
import { InvestigationModule } from './investigation/investigation.module';
import { RecipeModule } from './recipe/recipe.module';
import { VisitsModule } from './visits/visits.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtMiddleware } from './auth/jwt.middleware';
import { JwtModule } from '@nestjs/jwt';
import * as cookieParser from 'cookie-parser';

@Module({
  imports: [StaffModule, ClinicModule, ScheduleModule, LaboratoryModule, PacientModule, 
              PharmacyModule, VisitsModule, RecipeModule, InvestigationModule, CardModule, AuthModule, 
              ConfigModule.forRoot({isGlobal: true}), 
              JwtModule.registerAsync({
                imports: [ConfigModule],
                inject: [ConfigService],
                useFactory: async (configService: ConfigService) => ({
                  secret: configService.get<string>('JWT_SECRET'),
                  signOptions: { expiresIn: '60m' },
                }),
              })
                ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cookieParser(), JwtMiddleware)
      .exclude({ path: '/auth/login', method: RequestMethod.ALL })
      .forRoutes('*');
  }
}
