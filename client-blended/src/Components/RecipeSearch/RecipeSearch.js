import React, { useState, useEffect } from 'react';
import Recipe from '../Recipe/Recipe';
const RecipeSearch = props => {

    const [errors, setErrors] = useState(false);
    const [recipe, setRecipe] = useState("");

    const grabData = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
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
                <Recipe data={ recipe.drinks[0] } />
            }
        </div>
    );
}

export default RecipeSearch;