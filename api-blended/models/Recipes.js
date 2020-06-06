/*
* Recipe.js
* Author: Wiesa Anwari
* create and export mongoose Recipe model 
*/

import { model } from '../database';
//const db = require('../database');

const Recipe = model('Recipe', {
    name: String,
    type: String,
    ingredients: [{name: String, amount: String, amountType: String}],
    categories: [String]
});

export default Recipe;
//module.exports = Recipe;