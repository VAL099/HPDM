import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RecipeService, ClosedRecipeService } from './recipe.service';
import { ClosedRecipesDTO, RecipeDTO } from './recipe.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('recipe')
@Controller('recipe')
export class RecipeController {
  constructor(
    private readonly recipeService: RecipeService,
    private readonly closeRecipeService: ClosedRecipeService
  ) {}

  @Post()
  @ApiBody({ type: RecipeDTO })
  async create(dto: RecipeDTO){
    return this.recipeService.create(dto);
  }

  @Get(':pacientId')
  async pacientRecipes(@Param('pacientId', ParseIntPipe) pacientId: number){
    return this.recipeService.getPacientRecipes(pacientId);
  }

  @Get(':recipeId')
  async recipeById(@Param('recipeId', ParseIntPipe) recipeId: number){
    return this.recipeService.getRecipeById(recipeId);
  }

  @Post(':recipeId/close')
  async closeRecipe(@Param('recipeId', ParseIntPipe) recipeId: number, 
                      dto: ClosedRecipesDTO){
    this.recipeService.closeRecipe(recipeId);
    this.closeRecipeService.create({ ...dto, recipeId });
  }

  @Get(':pacientId/closed')
  async closedRecipeByID(@Param('recipeId', ParseIntPipe) recipeId: number){
    return this.closeRecipeService.getRecipeById(recipeId);
  }
}
