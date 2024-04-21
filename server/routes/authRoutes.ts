// src/routes/authRoutes.ts

import express from 'express';
import { register, login } from "../controllers/authController";
import { saveRecipeData } from '../controllers/recipeController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/addrecipe', saveRecipeData);

export default router;





