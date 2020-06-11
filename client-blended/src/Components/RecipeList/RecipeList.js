import React from "react";

const RecipeList = (props) => {
    const recipeClickHandler = (recipe) => {
        props.onRecipeClick(recipe);
    };

    return (
        <div>
            {props.data.map((rec, index) => (
                <div key={index}>
                    <input
                        type="submit"
                        onClick={(event) => recipeClickHandler(rec)}
                        value={
                            props.modify === "true"
                                ? rec._id + " " + rec.recipeName
                                : rec.recipeName
                        }
                    />
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
