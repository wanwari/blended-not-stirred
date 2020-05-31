/*
* Recipe.js
* Author: Wiesa Anwari
* create and export mongoose Recipe model 
*/

const db = require('../database');

const Recipe = db.model('Recipe', {
    name: String,
    type: String,
    ingredients: [{name: String, amount: String, amountType: String}],
    categories: [String]
});

module.exports = Recipe;