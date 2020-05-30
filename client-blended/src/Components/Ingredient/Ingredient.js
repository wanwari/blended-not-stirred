import React from 'react';

const Ingredient = props => {

    const ingredientList = props.ingredients.map((ing) => (
        <li key={ing.name}>
            {ing.amount} {ing.amountType} {ing.name}
        </li>
    ));

    return(
        <ul>
            { ingredientList }
        </ul>
    );
}

export default Ingredient;