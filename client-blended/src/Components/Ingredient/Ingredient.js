import React from 'react';

const Ingredient = props => {

    const ingredientList = props.ingredients.map((ing) => (
        <li key={ing}>
            {ing}
        </li>
    ));

    return(
        <ul>
            { ingredientList }
        </ul>
    );
}

export default Ingredient;