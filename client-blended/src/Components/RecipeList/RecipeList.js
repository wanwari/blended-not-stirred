import React, { useState } from 'react';
import Recipe from '../Recipe/Recipe';

const RecipeList = props => {

    const [dataToUse, setDataToUse] = useState();


    const recipeClickHandler = (event, recipe) => {
        props.onRecipeClick(recipe);
    }


    return(
        <div>
            {props.data.map((ing, index) => (
                <li key={ index } onClick={ (event) => recipeClickHandler(event, ing) } >{ ing.name } { ing.type} </li>
            ))}  
        </div>
    );
}

export default RecipeList;