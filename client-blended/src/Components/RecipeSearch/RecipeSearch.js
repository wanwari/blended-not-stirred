import React, { useState, useEffect } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import Recipe from '../Recipe/Recipe';

const RecipeSearch = (props) => {
    
    const [errors, setErrors] = useState(false);
    const [err, setErr] = useState("");
    const [recipes, setRecipes] = useState();
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const grabData = (res) => {
        fetch('http://localhost:8181/get_recipe/' + res)
        .then(res => res.json())
        .then(data => {
            if (!data)
                setErr("No recipe found matching ");
            else {
                setRecipes(data);
                setErrors(false);
            }
        })
        .catch(err => setErrors(err));
    }

    useEffect(() => {
        setSelectedRecipe(null);
        grabData(props.result);
    }, [props.result]);

    const handleBackClicked = () => {
        setSelectedRecipe(null);
    }

    return(
       <div>
            {errors &&
                <h1>{ err + " " + props.result}</h1>
            }           
           
            { (!errors && recipes) &&
                (selectedRecipe === null 
                ? <RecipeList data={recipes} onRecipeClick={ (r) => setSelectedRecipe(r) } /> 
                : <Recipe data={ selectedRecipe } />)
            }
            <input type="button" value="Back" onClick={ handleBackClicked }/>
       </div>
    );
}

export default RecipeSearch;