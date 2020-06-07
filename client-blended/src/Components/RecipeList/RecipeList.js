import React from 'react';

const RecipeList = props => {

    const recipeClickHandler = (recipe) => {
        props.onRecipeClick(recipe);
    }

    return(
        <div>
            {props.data.map((rec, index) => (
                <div key={ index } >
                    <input type="submit" onClick={ (event) => recipeClickHandler(rec) } value={ rec._id + " " + rec.name + " " + rec.type} />
                </div>
            ))}  
        </div>
    );
}

export default RecipeList;