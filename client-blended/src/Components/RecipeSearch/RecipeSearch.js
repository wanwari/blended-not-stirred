import React, { useState, useEffect } from 'react';
import Recipe from '../Recipe/Recipe';
const RecipeSearch = props => {

    const [errors, setErrors] = useState(false);
    const [recipe, setRecipe] = useState("");

    const grabData = () => {
        fetch('http://localhost:8181/get_recipe')
        .then(res => res.json())
        .then(data => setRecipe(data))
        .catch(err => setErrors(err));
    }

    useEffect(() => {
        grabData();
    }, []);

    return(
        <div>
            { (!errors && recipe) &&
                <Recipe data={ recipe } />
            }
        </div>
    );
}

export default RecipeSearch;