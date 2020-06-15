import React from "react";

const Form = (props) => {
    return (
        <div>
            <div>
                <h2>Recipe ID</h2>
                <input id="recipeID" type="text" disabled value={props.recipeID} />

                <h2>Recipe Name</h2>
                <input
                    id="recipeName"
                    type="text"
                    value={props.recipeName}
                    onChange={(event) => props.handleRecipeNameChange(event)}
                />

                <h2>Recipe Type</h2>
                <select value={props.recipeType} onChange={(event) => props.handleRecipeTypeChange(event)}>
                    <option value="smoothie">Smoothie</option>
                    <option value="shake">Shake</option>
                </select>

                <h2>Categories</h2>
                <div>
                    <select
                        multiple
                        value={props.recipeCategories}
                        onChange={(event) => props.handleRecipeCategoriesChange(event)}>
                        <option value="high_protein">high_protein</option>
                        <option value="low_fat">low_fat</option>
                        <option value="nut_free">nut_free</option>
                        <option value="low_sugar">low_sugar</option>
                        <option value="lactose_free">lactose_free</option>
                        <option value="vegan">vegan</option>
                    </select>
                </div>

                <h2>Ingredients</h2>
                <h3>Name | Quantity | Quantity Type</h3>
                {props.recipeIngredients.map((currentIngredient, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={currentIngredient.ingredientName}
                            onChange={(event) => props.handleIngredientsChange(index, event, "ingredientName")}
                        />
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={currentIngredient.ingredientQuantity}
                            onChange={(event) => props.handleIngredientsChange(index, event, "ingredientQuantity")}
                        />
                        <input
                            type="text"
                            placeholder="Quantity Type"
                            value={currentIngredient.ingredientQuantityType}
                            onChange={(event) => props.handleIngredientsChange(index, event, "ingredientQuantityType")}
                        />
                        <input
                            id="deleteCurrentIngredient"
                            type="button"
                            value="Delete"
                            onClick={(currentIngredient) => props.handleDeleteCurrentIngredientClick(index)}
                        />
                    </div>
                ))}
                <input
                    id="addIngredientsInput"
                    type="button"
                    value="Add Ingredient"
                    onClick={props.handleAddIngredientsInput}
                />

                <div>
                    <h2>Macros</h2>
                    <input
                        type="number"
                        placeholder="calories"
                        value={props.recipeCalories}
                        onChange={props.handleRecipeCaloriesChange}
                    />
                    <input
                        type="number"
                        placeholder="protein"
                        value={props.recipeProtein}
                        onChange={props.handleRecipeProteinChange}
                    />
                    <input
                        type="number"
                        placeholder="fat"
                        value={props.recipeFat}
                        onChange={props.handleRecipeFatChange}
                    />
                    <input
                        type="number"
                        placeholder="carbs"
                        value={props.recipeCarbs}
                        onChange={props.handleRecipeCarbsChange}
                    />
                </div>

                <div>
                    {props.modify === "true" && (
                        <div>
                            <input
                                type="submit"
                                value="Update"
                                onClick={() => {
                                    props.handleModifyClick("UPDATE");
                                }}
                            />
                            <input type="submit" value="Delete" onClick={props.handleDeleteClick} />
                        </div>
                    )}
                </div>
                <div>
                    {props.submit === "true" && (
                        <input
                            type="submit"
                            value="Submit"
                            onClick={() => {
                                props.handleModifyClick("SUBMIT");
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Form;
