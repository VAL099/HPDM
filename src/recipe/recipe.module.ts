import { Module } from '@nestjs/common';
import { ClosedRecipeService, RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { ClosedRecipesDTO } from './recipe.dto';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService, ClosedRecipeService, PrismaService],
})
export class RecipeModule {}
