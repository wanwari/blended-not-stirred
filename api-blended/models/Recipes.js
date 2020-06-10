/*
* Recipe.js
* Author: Wiesa Anwari
* create and export mongoose Recipe model 
*/

const db = require('../database');

const Recipe = db.model('Recipe', {
    name: String,
    type: String,
    ingredients: [{ingredientName: String, ingredientQuantity: String, ingredientQuantityType: Number, ingredientCalories: Number}],
    categories: [String],
    totalCalories: Number
});

module.exports = Recipe;