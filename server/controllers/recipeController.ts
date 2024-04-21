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


