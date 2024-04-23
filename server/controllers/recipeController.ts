import { Request, Response } from 'express';
import {RecipeDataModel} from '../models/RecipeDataModel';

// async (req: Request, res: Response): Promise<void> => {
export const saveRecipeData =  async (req: Request, res: Response) => {
    try {
        const recipe = new RecipeDataModel(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getAllRecipe=async (req: Request, res: Response) => {
  try {
    
    const recipes = await RecipeDataModel.find();
    res.status(200).json(recipes);
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRecipeById =  async (req: Request, res: Response) => {
  try {
    const recipe = await RecipeDataModel.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
