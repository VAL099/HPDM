import { Injectable } from '@nestjs/common';
import { ClosedRecipesDTO, RecipeDTO } from './recipe.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RecipeService {
    constructor(private prisma: PrismaService) {}

    async create(dto: RecipeDTO){
        return this.prisma.recipe.create({
            data: dto,
        });
    }

    async getPacientRecipes(pacientId: number){
        return this.prisma.recipe.findMany({
            where: { pacientId: pacientId, },
        });
    }

    async getRecipeById(id: number){
        return this.prisma.recipe.findUnique({
            where: { id: id, },
        });
    }

    async closeRecipe(id: number){
        return this.prisma.recipe.update({
            where: { id: id, },
            data: { isActive: false, },
        });
    }

}

@Injectable()
export class ClosedRecipeService {
    constructor(private prisma: PrismaService) {}

    async create(dto: ClosedRecipesDTO){
        return this.prisma.closedRecipes.create({
            data: dto,
        });
    }

    async getRecipeById(id: number){
        return this.prisma.closedRecipes.findUnique({
            where: { id: id, },
        });
    }
}
