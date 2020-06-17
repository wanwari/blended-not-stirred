import React from "react";

import Ingredient from "../Ingredient/Ingredient";

const Recipe = (props) => {
    return (
        <div>
            <h1>{props.data.recipeName}</h1>
            <h2>{props.data.recipeType}</h2>
            <Ingredient ingredients={props.data.recipeIngredients} />
            <h3>Calories {props.data.recipeCalories}</h3>
            <h3>
                Protein {props.data.recipeProtein}g | Fat {props.data.recipeFat}g | Carbs {props.data.recipeCarbs}g
            </h3>
        </div>
    );
};

export default Recipe;
