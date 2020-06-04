import React from 'react';

const RecipeList = props => {

    const recipeClickHandler = (recipe) => {
        props.onRecipeClick(recipe);
    }

    return(
        <div>
            {props.data.map((ing, index) => (
                <input type="submit" key={ index } onClick={ (event) => recipeClickHandler(rec) } value={ rec._id + " " + rec.name + " " + rec.type} />
            ))}  
        </div>
    );
}

export default RecipeList;