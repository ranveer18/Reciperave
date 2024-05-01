"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipeController_1 = require("../controllers/recipeController");
const router = express_1.default.Router();
router.post('/addrecipe', recipeController_1.saveRecipeData);
router.get('/recipe', recipeController_1.getAllRecipe);
router.get('/recipe/:id', recipeController_1.getRecipeById);
router.put('/updaterecipes/:id', recipeController_1.updateRecipeById);
router.delete('/deleterecipes/:id', recipeController_1.deleteRecipeById);
exports.default = router;
