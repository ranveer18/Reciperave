// src/models/Recipe.js

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
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

export const RecipeDataModel = mongoose.model('Recipe', recipeSchema);

// module.exports = RecipeDataModel;
