import express from 'express';
import { saveRecipeData,getAllRecipe,getRecipeById } from '../controllers/recipeController';


const router = express.Router();

router.post('/addrecipe', saveRecipeData);
router.get('/recipe', getAllRecipe);
router.get('/recipe/:id', getRecipeById);

export default router;
