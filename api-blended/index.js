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

    console.log(req.params.id);

    //currently returns the first recipe with a matching name
    Recipe.find({name: req.params.id}, (err, result) => {
        res.send(result[0]);
    })
    
});

app.post('/submit_recipe/', (req,res) => {
    //recieve a Recipe as a JSON object located in req.body
    
    //create a new mongoose Recipe model with the data
    var recipeToSave = new Recipe(req.body);
    //save it to the database.
    recipeToSave.save();
});

const server = app.listen(8181, () => {
    console.log("[index.js] Listening at ", server.address().port);
});