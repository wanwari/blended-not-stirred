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
    });

    var Recipe = mongoose.model('Recipe', recipeSchema);

    var mango = new Recipe({
        name: "Tropical",
    });

    mango.save(() => {
        
    });

    app.get('/get_recipe/:id', (req, res) => {
    
        Recipe.find({name: req.params.id}, (err, result) => {
            res.send(result);
        });
    });
});




const server = app.listen(8181, () => {
    console.log("Listening at ", server.address().port);
});