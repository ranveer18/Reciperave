// src/routes/authRoutes.ts

import express from 'express';
import { register, login } from "../controllers/authController";
import { saveRecipeData,getAllRecipe,getRecipeById } from '../controllers/recipeController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);


export default router;





