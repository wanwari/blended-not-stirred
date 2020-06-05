import React, { useState, useEffect } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import Recipe from '../Recipe/Recipe';

import getData from '../Networking/getData';

const RecipeSearch = (props) => {
    
    const [errors, setErrors] = useState(false);
    const [err, setErr] = useState("");
    const [recipes, setRecipes] = useState();
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const grabData = (res, arr) => {
        if (res !== "") {
            getData('http://localhost:8181/recipies/' + res + "/" + arr)
            .then(data => {
                if (data.length === 0) {
                    setErr("No recipe found matching ");
                    setErrors(true);
                } else {
                    setRecipes(data);
                    setErrors(false);
                }
            })
            .catch(err => setErrors(err));
        }
        
    }

    useEffect(() => {
        setSelectedRecipe(null);
        grabData(props.result, JSON.stringify(props.categories));

    }, [props.result, props.categories]);

    const handleBackClicked = () => {
        setSelectedRecipe(null);
    }

    return(
       <div>
            {errors &&
                <p>{ err + " " + props.result}</p>
            }           
           
            {(!errors && recipes) &&
                (selectedRecipe === null 
                ? <RecipeList data={recipes} onRecipeClick={ (r) => setSelectedRecipe(r) } /> 
                : <Recipe data={ selectedRecipe } />)
            }
            {(selectedRecipe !== null) &&
                <input type="button" value="Back" onClick={ handleBackClicked }/>
            }
            
       </div>
    );
}

export default RecipeSearch;