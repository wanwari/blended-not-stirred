/*
* database.js
* Author: Wiesa Anwari
* open and export a connection to the recipe_db mongo database
*/

import mongoose, { connect } from 'mongoose';

connect('mongodb://localhost/recipe_db', 
    { useNewUrlParser: true, useUnifiedTopology: true } ,
    () => { console.log('[db.js] Connected to mongodb') }
);

export default mongoose;