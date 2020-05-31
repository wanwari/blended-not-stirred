const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipe_db', 
    { useNewUrlParser: true, useUnifiedTopology: true } ,
    () => { console.log('mongodb connected') }
);

module.exports = mongoose;