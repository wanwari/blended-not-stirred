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

//import the Recipes mongoose model
var Recipes = require('./models/Recipes')

//GET /recipies
app.get('/recipies', (req, res) => {
    console.log('[index.js] GET request made at /recipies');
    Recipes.find({}, (err, results) => {
        if (!err) {
            res.send(results)
        }
    });
});

//GET /recipies/:id
app.get('/recipies/:id', (req, res) => {
    const id = req.params.id;
    console.log('[index.js] GET request made at /recipies/' + id);
    Recipes.find({name: id}, (err, results) => {
        if (!err) {
            res.send(results);
        }
    });
});

//POST /recipies
app.post('/recipies', (req, res) => {
    new Recipes(req.body).save(() => console.log("Saved"));
});

app.delete('/recipies/:id', (req, res) => {
    const id = req.params.id;
    Recipes.deleteOne({_id: id}, (err, results) => {
        if (!err) {
            console.log(results);
        }
    });
});

const server = app.listen(8181, () => {
    console.log("[index.js] Listening at ", server.address().port);
});