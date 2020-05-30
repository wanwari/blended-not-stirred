import React from 'react';

import Ingredient from '../Ingredient/Ingredient';

const Recipe = props => {

    const ingredientArray = [props.data.strIngredient1, props.data.strIngredient2, props.data.strIngredient3];

    return(
        <div>
            <h1>{ props.data.strDrink }</h1>
            <Ingredient ingredients={ ingredientArray }/>
            
        </div>
    );
}

export default Recipe;