/*
* Recipe.js
* Author: Wiesa Anwari
* Create model 
*/

const db = require('../db');

const Recipe = db.model('Recipe', {
    name: String,
    type: String,
    ingredients: [{name: String, amount: String, amountType: String}],
    categories: [String]
});

module.exports = Recipe;