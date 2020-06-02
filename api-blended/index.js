/*
* index.js
* Author: Wiesa Anwari
* entry point for blended-not-stirred api
*/

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//import the Recipe mongoose model
var Recipe = require('./models/Recipe')

app.get('/get_recipe/:id', (req, res) => {

    /* TODO
    * write search algorithm to find and return an array of 
    * recipies based on search text located in req.params.id
    */
    const searchQuery = req.params.id;
    
    //currently returns the first recipe with a matching name
    Recipe.find({name: searchQuery}, function(err, result) { 
        console.log(result);
     });
    
});

app.post('/submit_recipe/', (req,res) => {
    //recieve a Recipe as a JSON object located in req.body
    
    //create a new mongoose Recipe model with the data
    console.log(req.body);
    var recipeToSave = new Recipe(req.body);
    //save it to the database.
    recipeToSave.save();
});

app.post('/list_all/', (req,res) => {
    Recipe.find({}, function(err, result) { 
        console.log(result);
        console.log("========================================================")
        console.log(result.map(ing => (console.log(ing.ingredients))));
     });
});

app.post('/drop_db/', (req,res) => {
    Recipe.deleteMany({}, function(err) { 
        console.log('collection removed');
     });
});

const server = app.listen(8181, () => {
    console.log("[index.js] Listening at ", server.address().port);
});