"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipeById = exports.updateRecipeById = exports.getRecipeById = exports.getAllRecipe = exports.saveRecipeData = void 0;
const RecipeDataModel_1 = require("../models/RecipeDataModel");
// async (req: Request, res: Response): Promise<void> => {
const saveRecipeData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = new RecipeDataModel_1.RecipeDataModel(req.body);
        yield recipe.save();
        res.status(201).json(recipe);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.saveRecipeData = saveRecipeData;
const getAllRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipes = yield RecipeDataModel_1.RecipeDataModel.find();
        res.status(200).json(recipes);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllRecipe = getAllRecipe;
const getRecipeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipe = yield RecipeDataModel_1.RecipeDataModel.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(recipe);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getRecipeById = getRecipeById;
const updateRecipeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const recipe = yield RecipeDataModel_1.RecipeDataModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateRecipeById = updateRecipeById;
const deleteRecipeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const recipe = yield RecipeDataModel_1.RecipeDataModel.findByIdAndDelete(id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteRecipeById = deleteRecipeById;
