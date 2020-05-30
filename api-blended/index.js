const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const mongoDB = 'mongodb://localhost/recipe_db';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {

    var recipeSchema = new mongoose.Schema({
        name: String,
        type: String,
        ingredients: [{name: String, amount: String, amountType: String}],
        categories: [String]
    });

    var Recipe = mongoose.model('Recipe', recipeSchema);

    var mango = new Recipe({
        name: "Tropical",
        type: "SMOOTHIE",
        ingredients: [
            {name: "mango", amount: "1", amountType: "diced"},
            {name: "frozen strawberries", amount: "1", amountType: "cup"},
            {name: "low-fat vanilla yogurt", amount: "1", amountType: "cup"},
            {name: "pineapple", amount: "6", amountType: "ounches"},
            {name: "frozen blueberries", amount: "1/2", amountType: "cup"}
        ],
        categories: ["low_fat", "nut free"]
    });

    mango.save(() => {
        console.log("Saved");
    });

    Recipe.find({name: "Tropical"}, (err, result) => {
        console.log(err);
        console.log(result);
    });
});


app.get('/get_recipe/:id', (req, res) => {
    
});


const server = app.listen(8181, () => {
    console.log("Listening at ", server.address().port);
});