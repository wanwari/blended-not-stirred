import React from 'react';

const RecipeList = props => {

    const recipeClickHandler = (recipe) => {
        props.onRecipeClick(recipe);
    }

    return(
        <div>
            {props.data.map((ing, index) => (
                <li key={ index } onClick={ (event) => recipeClickHandler(ing) } >{ ing.name } { ing.type} </li>
            ))}  
        </div>
    );
}

export default RecipeList;