/*
 * Recipe.js
 * Author: Wiesa Anwari
 * create and export mongoose Recipe model
 */

const db = require("../database");

const Recipe = db.model("Recipe", {
    recipeName: String,
    recipeType: String,
    recipeIngredients: [
        {
            ingredientName: String,
            ingredientQuantity: Number,
            ingredientQuantityType: String,
        },
    ],
    recipeCategories: [String],
    recipeCalories: Number,
    recipeProtein: Number,
    recipeFat: Number,
    recipeCarbs: Number,
});

module.exports = Recipe;
