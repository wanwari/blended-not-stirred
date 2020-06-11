/*
* index.js
* Author: Wiesa Anwari
* entry point for blended-not-stirred api
*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Recipes = require('./models/Recipes');

const { json, urlencoded } = bodyParser;

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));


/*
* GET /recipies
* handles GET request to /recipies
* returns a list of all items found in Recipes model
*/
app.get('/recipies', (req, res) => {
    console.log('[index.js] GET request made at /recipies');
    Recipes.find({}, (err, results) => {
        if (!err) {
            res.send(results)
        } else {
            console.error(err);
        }
    });
});

/*
* GET /recipies/:recipeName/:categories
* handles GET request to /recipies/:recipeName/:categories
* returns a list of all items that match :recipeName and optional :categories
*/
app.get('/recipies/:recipeName/:recipeCategories', (req, res) => {
    const name = req.params.recipeName;
    const categoriesToSearch = JSON.parse(req.params.recipeCategories);
    
    console.log('[index.js] GET request made at /recipies/' + name + '/' + categoriesToSearch);

    Recipes.find({recipeName: name}, (err, recipiesFound) => {
        let dataToSend = [];
        if (!err) {
            //if categories has been passed
            if (categoriesToSearch.length !== 0) {
                //loop through each Recipe that mached recipeName
                recipiesFound.map((currentResult) => {
                    let valid = false;
                    //loop through each categories provided
                    for (let i = 0; i < categoriesToSearch.length; i++) {
                        //if the recipie contains the current categorie check the next one
                        if (currentResult.recipeCategories.includes(categoriesToSearch[i])) {
                            valid = true;
                        //else mark the current Recipe as invalid and break
                        } else {
                            valid = false;
                            break;
                        }
                    }
                    //push the valid Recipie to an array to be returned
                    if (valid)
                        dataToSend.push(currentResult);
                });
                res.send(dataToSend);
            } else {
                //no categories were passed so just send all Recipies that mached recipeName
                res.send(recipiesFound);
            }
        } else {
            console.error(err);
        }
    });
  
});

/*
* POST /recipies
* handles POST request to /recipies
* receives a Recipe in the body and saves it to the db
* TODO: validate body before saving to db 
*/
app.post('/recipies', (req, res) => {
    new Recipes(req.body).save(() => console.log("saved"));
});

/*
* DELETE /recipies/:id
* handles DELETE request to /recipies/:id
* receives an :id in the req params and deletes the matching Recipe found in the db
*/
app.delete('/recipies/:id', (req, res) => {
    const id = req.params.id;
    Recipes.deleteOne({_id: id}, (err, results) => {
        if (!err) {
            console.log(results);
        } else {
            console.error(err);
        }
    });
});

app.put('/recipies/:id', (req, res) => {
    const id = req.params.id;
    const newRecipe = req.body;
    console.log(id);
    console.log(newRecipe);
    Recipes.findOneAndReplace({_id: id}, newRecipe, {new: true}, (resFound) => {
        console.log(resFound);
    });
});

const server = app.listen(8181, () => {
    console.log("[index.js] Listening at ", server.address().port);
});