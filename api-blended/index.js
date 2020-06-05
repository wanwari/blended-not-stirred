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
app.get('/recipies/:id/:arr', (req, res) => {
    const id = req.params.id;
    const categoriesToSearch = JSON.parse(req.params.arr);
    
    console.log('[index.js] GET request made at /recipies/' + id);

    Recipes.find({name: id}, (err, results) => {
        let dataToSend = [];
        if (!err) {
            if (categoriesToSearch.length !== 0) {
                results.map((currentResult) => {
                    let valid = false;
                    for (let i = 0; i < categoriesToSearch.length; i++) {
                        if (currentResult.categories.includes(categoriesToSearch[i]))
                            valid = true;
                        else {
                            valid = false;
                            break;
                        }
                    }
                    if (valid)
                        dataToSend.push(currentResult);
                });
                res.send(dataToSend);
            } else {
                res.send(results);
            }
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