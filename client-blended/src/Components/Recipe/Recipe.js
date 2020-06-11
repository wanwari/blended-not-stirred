import React from "react";

import Ingredient from "../Ingredient/Ingredient";

const Recipe = (props) => {
    return (
        <div>
            <h1>{props.data.recipeName}</h1>
            <h2>{props.data.recipeType}</h2>
            <Ingredient ingredients={props.data.recipeIngredients} />
            <h3>
                Calories {props.data.recipeCalories} | Protein{" "}
                {props.data.recipeProtein} | Fat {props.data.recipeFat} | Carbs{" "}
                {props.data.recipeCarbs}{" "}
            </h3>
        </div>
    );
};

export default Recipe;
