import React, { useState, useEffect, createContext } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import Recipe from '../Recipe/Recipe';

const RecipeSearch = (props) => {
    
    const [errors, setErrors] = useState(false);
    const [recipes, setRecipes] = useState("");
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const grabData = (res) => {
        fetch('http://localhost:8181/get_recipe/' + res)
        .then(res => res.json())
        .then(data => {
            setRecipes(data);
            setErrors(false)
        })
        .catch(err => setErrors(err));
    }

    useEffect(() => {
        grabData(props.result);
    }, [props.result]);

    return(
       <div>
            { (!errors && recipes) 
            ? 
                (selectedRecipe === null 
                ? <RecipeList data={recipes} onRecipeClick={ (r) => setSelectedRecipe(r) } /> 
                : <Recipe data={ selectedRecipe } />)
            : console.log()
            }
       </div>
    );
}

export default RecipeSearch;