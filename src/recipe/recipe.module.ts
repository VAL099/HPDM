import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { ClosedRecipesDTO } from './recipe.dto';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService, ClosedRecipesDTO, PrismaService],
})
export class RecipeModule {}
