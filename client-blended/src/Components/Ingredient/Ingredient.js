import React from "react";

const Ingredient = (props) => {
    const ingredientList = props.ingredients.map((ing, index) => (
        <li key={index}>
            {ing.ingredientQuantity} {ing.ingredientQuantityType} {ing.ingredientName}
        </li>
    ));

    return <ul>{ingredientList}</ul>;
};

export default Ingredient;
