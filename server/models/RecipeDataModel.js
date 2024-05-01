"use strict";
// src/models/Recipe.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeDataModel = void 0;
const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    serve: {
        type: String
    },
    preprationtimeHRS: {
        type: String
    },
    preprationtimeMINS: {
        type: String
    },
    cooktimeHRS: {
        type: String
    },
    cooktimeMINS: {
        type: String
    },
    ingredients: [{
            qty: {
                type: String
            },
            measurement: {
                type: String
            },
            ingredientsItem: {
                type: String
            }
        }],
    instructions: [{
            step: {
                type: String
            }
        }],
    tag: {
        type: String
    }
});
exports.RecipeDataModel = mongoose.model('Recipe', recipeSchema);
// module.exports = RecipeDataModel;
