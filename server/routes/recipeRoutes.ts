import express from 'express';
import { saveRecipeData,getAllRecipe,getRecipeById,updateRecipeById,deleteRecipeById } from '../controllers/recipeController';


const router = express.Router();

router.post('/addrecipe', saveRecipeData);
router.get('/recipe', getAllRecipe);
router.get('/recipe/:id', getRecipeById);
router.put('/updaterecipes/:id', updateRecipeById);
router.delete('/deleterecipes/:id', deleteRecipeById);

export default router;
