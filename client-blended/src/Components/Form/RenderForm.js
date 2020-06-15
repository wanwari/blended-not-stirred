import React, { useState, useEffect } from "react";
import Form from "./Form";

const RenderForm = (props) => {
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
        setRecipeCategories(Array.from(event.target.selectedOptions, (option) => option.value));

    const handleRecipeProteinChange = (event) => setRecipeProtein(event.target.value);
    const handleRecipeCaloriesChange = (event) => setRecipeCalories(event.target.value);
    const handleRecipeFatChange = (event) => setRecipeFat(event.target.value);
    const handleRecipeCarbsChange = (event) => setRecipeCarbs(event.target.value);

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

    const handleModifyClick = (type) => {
        const data = {
            recipeName: recipeName,
            recipeType: recipeType,
            recipeCategories: recipeCategories,
            recipeIngredients: recipeIngredients,
            recipeCalories: recipeCalories,
            recipeProtein: recipeProtein,
            recipeFat: recipeFat,
            recipeCarbs: recipeCarbs,
        };

        switch (type) {
            case "UPDATE":
                console.log(data);
                data.recipeID = recipeID;
                props.onUpdateClick(data);
                break;
            case "SUBMIT":
                console.log(data);
                props.handleSubmitClick(data);
                break;
            default:
                console.log("err");
        }
    };

    return (
        <div>
            <Form
                recipeID={recipeID}
                recipeName={recipeName}
                recipeType={recipeType}
                recipeCategories={recipeCategories}
                recipeIngredients={recipeIngredients}
                recipeCalories={recipeCalories}
                recipeProtein={recipeProtein}
                recipeFat={recipeFat}
                recipeCarbs={recipeCarbs}
                handleRecipeNameChange={(event) => handleRecipeNameChange(event)}
                handleRecipeTypeChange={(event) => handleRecipeTypeChange(event)}
                handleRecipeCategoriesChange={(event) => handleRecipeCategoriesChange(event)}
                handleIngredientsChange={(index, event, propeprty) => handleIngredientsChange(index, event, propeprty)}
                handleDeleteCurrentIngredientClick={(index) => handleDeleteCurrentIngredientClick(index)}
                handleAddIngredientsInput={() => {
                    handleAddIngredientsInput();
                }}
                handleRecipeCaloriesChange={(event) => handleRecipeCaloriesChange(event)}
                handleRecipeProteinChange={(event) => handleRecipeProteinChange(event)}
                handleRecipeFatChange={(event) => handleRecipeFatChange(event)}
                handleRecipeCarbsChange={(event) => handleRecipeCarbsChange(event)}
                handleDeleteClick={() => {
                    handleDeleteClick();
                }}
                handleModifyClick={(type) => {
                    handleModifyClick(type);
                }}
                modify={props.modify}
                submit={props.submit}
            />
        </div>
    );
};

export default RenderForm;
