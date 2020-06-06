/*
* index.js
* Author: Wiesa Anwari
* entry point for blended-not-stirred api
*/

import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import Recipes, { find, deleteOne } from './models/Recipes';

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
    find({}, (err, results) => {
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
app.get('/recipies/:recipeName/:categories', (req, res) => {
    const recipeName = req.params.recipeName;
    const categoriesToSearch = JSON.parse(req.params.categories);
    
    console.log('[index.js] GET request made at /recipies/' + recipeName);

    //find all recipies that match recipeName
    find({name: recipeName}, (err, recipiesFound) => {
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
                        if (currentResult.categories.includes(categoriesToSearch[i])) {
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
    new Recipes(req.body).save(() => console.log("Saved"));
});

/*
* DELETE /recipies/:id
* handles DELETE request to /recipies/:id
* receives an :id in the req params and deletes the matching Recipe found in the db
*/
app.delete('/recipies/:id', (req, res) => {
    const id = req.params.id;
    deleteOne({_id: id}, (err, results) => {
        if (!err) {
            console.log(results);
        } else {
            console.error(err);
        }
    });
});

const server = app.listen(8181, () => {
    console.log("[index.js] Listening at ", server.address().port);
});