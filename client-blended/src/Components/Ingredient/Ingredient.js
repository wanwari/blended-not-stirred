import React from 'react';

const Ingredient = props => {

    const ingredientList = props.ingredients.map((ing, index) => (
        <li key={index}>
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