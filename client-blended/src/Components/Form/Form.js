import React, { useState, useEffect } from "react";

const Form = (props) => {
    const [recipeID, setRecipeID] = useState("");
    const [recipeName, setRecipeName] = useState("");
    const [recipeType, setRecipeType] = useState("smoothie");
    const [recipeCategories, setRecipeCategories] = useState([]);
    const [recipeIngredients, setRecipeIngredients] = useState([]);

    const [recipeCalories, setRecipeCalories] = useState("");
    const [recipeProtein, setRecipeProtein] = useState("");
    const [recipeFat, setRecipeFat] = useState("");
    const [recipeCarbs, setRecipeCarbs] = useState("");

    useEffect(() => {
        if (props.data !== null) initIngredients(props.data);
    }, [props.data]);

    const initIngredients = (data) => {
        let tmpArray = [];
        data.recipeIngredients.forEach((ing, index) => {
            tmpArray[index] = {
                ingredientName: ing.ingredientName,
                ingredientQuantity: ing.ingredientQuantity,
                ingredientQuantityType: ing.ingredientQuantityType,
            };
        });

        setRecipeID(data._id);
        setRecipeName(data.recipeName);
        setRecipeType(data.recipeType);
        setRecipeCategories(data.recipeCategories);
        setRecipeIngredients(tmpArray);
        setRecipeCalories(data.recipeCalories);
        setRecipeProtein(data.recipeProtein);
        setRecipeFat(data.recipeFat);
        setRecipeCarbs(data.recipeCarbs);
    };

    const handleRecipeNameChange = (event) => setRecipeName(event.target.value);
    const handleRecipeTypeChange = (event) => setRecipeType(event.target.value);
    const handleRecipeCategoriesChange = (event) =>
        setRecipeCategories(
            Array.from(event.target.selectedOptions, (option) => option.value)
        );

    const handleRecipeProteinChange = (event) =>
        setRecipeProtein(event.target.value);
    const handleRecipeCaloriesChange = (event) =>
        setRecipeCalories(event.target.value);
    const handleRecipeFatChange = (event) => setRecipeFat(event.target.value);
    const handleRecipeCarbsChange = (event) =>
        setRecipeCarbs(event.target.value);

    const handleIngredientsChange = (index, event, property) => {
        let tmpArray = [...recipeIngredients];

        switch (property) {
            case "ingredientName":
                tmpArray[index].ingredientName = event.target.value;
                break;
            case "ingredientQuantity":
                tmpArray[index].ingredientQuantity = event.target.value;
                break;
            case "ingredientQuantityType":
                tmpArray[index].ingredientQuantityType = event.target.value;
                break;
            default:
                console.log("err");
                break;
        }

        setRecipeIngredients(tmpArray);
    };

    const handleDeleteCurrentIngredientClick = (index) => {
        let tmpArray = [...recipeIngredients];
        tmpArray.splice(index, 1);
        setRecipeIngredients(tmpArray);
    };

    const handleAddIngredientsInput = () => {
        const newIngredient = {
            ingredientName: "",
            ingredientQuantity: 0.0,
            ingredientQuantityType: "",
        };
        setRecipeIngredients((prevIng) => [...prevIng, newIngredient]);
    };

    const handleDeleteClick = () => {
        props.onDeleteClick(props.data._id);
    };

    const handleUpdateClick = () => {
        const dataToUpdate = {
            recipeID: recipeID,
            recipeName: recipeName,
            recipeType: recipeType,
            recipeCategories: recipeCategories,
            recipeIngredients: recipeIngredients,
            recipeCalories: recipeCalories,
            recipeProtein: recipeProtein,
            recipeFat: recipeFat,
            recipeCarbs: recipeCarbs,
        };
        console.log(dataToUpdate);
        props.onUpdateClick(dataToUpdate);
    };

    const handleSubmitClick = () => {
        const dataToSubmit = {
            recipeName: recipeName,
            recipeType: recipeType,
            recipeCategories: recipeCategories,
            recipeIngredients: recipeIngredients,
            recipeCalories: recipeCalories,
            recipeProtein: recipeProtein,
            recipeFat: recipeFat,
            recipeCarbs: recipeCarbs,
        };
        props.handleSubmitClick(dataToSubmit);
    };

    const formStructure = (
        <div>
            <h2>Recipe ID</h2>
            <input id="recipeID" type="text" disabled value={recipeID} />

            <h2>Recipe Name</h2>
            <input
                id="recipeName"
                type="text"
                value={recipeName}
                onChange={(event) => handleRecipeNameChange(event)}
            />

            <h2>Recipe Type</h2>
            <select value={recipeType} onChange={handleRecipeTypeChange}>
                <option value="smoothie">Smoothie</option>
                <option value="shake">Shake</option>
            </select>

            <h2>Caregories</h2>
            <div>
                <select
                    multiple
                    value={recipeCategories}
                    onChange={handleRecipeCategoriesChange}
                >
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
            {recipeIngredients.map((currentIngredient, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={currentIngredient.ingredientName}
                        onChange={(event) =>
                            handleIngredientsChange(
                                index,
                                event,
                                "ingredientName"
                            )
                        }
                    />
                    <input
                        type="number"
                        placeholder="Quantity"
                        value={currentIngredient.ingredientQuantity}
                        onChange={(event) =>
                            handleIngredientsChange(
                                index,
                                event,
                                "ingredientQuantity"
                            )
                        }
                    />
                    <input
                        type="text"
                        placeholder="Quantity Type"
                        value={currentIngredient.ingredientQuantityType}
                        onChange={(event) =>
                            handleIngredientsChange(
                                index,
                                event,
                                "ingredientQuantityType"
                            )
                        }
                    />
                    <input
                        id="deleteCurrentIngredient"
                        type="button"
                        value="Delete"
                        onClick={(currentIngredient) =>
                            handleDeleteCurrentIngredientClick(index)
                        }
                    />
                </div>
            ))}
            <input
                id="addIngredientsInput"
                type="button"
                value="Add Ingredient"
                onClick={handleAddIngredientsInput}
            />

            <div>
                <h2>Macros</h2>
                <input
                    type="number"
                    placeholder="calories"
                    value={recipeCalories}
                    onChange={handleRecipeCaloriesChange}
                />
                <input
                    type="number"
                    placeholder="protein"
                    value={recipeProtein}
                    onChange={handleRecipeProteinChange}
                />
                <input
                    type="number"
                    placeholder="fat"
                    value={recipeFat}
                    onChange={handleRecipeFatChange}
                />
                <input
                    type="number"
                    placeholder="carbs"
                    value={recipeCarbs}
                    onChange={handleRecipeCarbsChange}
                />
            </div>

            <div>
                {props.modify === "true" && (
                    <div>
                        <input
                            type="submit"
                            value="Update"
                            onClick={handleUpdateClick}
                        />
                        <input
                            type="submit"
                            value="Delete"
                            onClick={handleDeleteClick}
                        />
                    </div>
                )}
            </div>
            <div>
                {props.submit === "true" && (
                    <input
                        type="submit"
                        value="Submit"
                        onClick={handleSubmitClick}
                    />
                )}
            </div>
        </div>
    );

    return <div>{formStructure}</div>;
};

export default Form;
