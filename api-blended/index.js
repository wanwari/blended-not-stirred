const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

const recipe = {
    name: "Tropical Smoothie",
    type: "SMOOTHIE",
    ingredients: [
        {name: "mango", amount: "1", amountType: "diced"},
        {name: "frozen strawberries", amount: "1", amountType: "cup"},
        {name: "low-fat vanilla yogurt", amount: "1", amountType: "cup"},
        {name: "pineapple", amount: "6", amountType: "ounches"},
        {name: "frozen blueberries", amount: "1/2", amountType: "cup"}
    ],
    categories: ["low_fat", "nut free"]
};

app.get('/get_recipe/tropical', (req, res) => {
    res.send(recipe);
});

const server = app.listen(8181, () => {
    console.log("Listening at ", server.address().port);
});