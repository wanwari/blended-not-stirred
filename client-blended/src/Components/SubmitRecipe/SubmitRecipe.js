import React, { useState } from 'react';

const SubmitRecipe = () => {

    const [recipeName, setRecipeName] = useState("");
    const [recipeType, setRecipeType] = useState("");

    const [categoriesInput, setCategoriesInput] = useState([""]);
    const [ingredientsInput, setIngredientsInput] = useState([""]);

    const [categories, setCategories] = useState([]);
    const [ingredientName, setIngredientName] = useState([]);
    const [ingredientQuantity, setIngredientQuantity] = useState([]);
    const [ingredientQuantityType, setIngredientQuantityType] = useState([]);

    const handleRecipeNameChange = (event) => {
        setRecipeName(event.target.value);
    }

    const handleRecipeTypeChange = (event) => {  
        setRecipeType(event.target.value);
    }

    const handleCategoriesChange = (index, event) => {
        let newArr = [...categories];
        newArr[index] = event.target.value;
        setCategories(newArr);
    }

    const addNewInput = (type) => {  
        switch (type) {
            case "CATEGORIES":
                setCategoriesInput(prevCategories => [...prevCategories, ""]);
                break;
            case "INGREDIENT": 
                setIngredientsInput(prevName => [...prevName, ""]);
                break;
            default:
                console.log("Err: unhandled param passed");
                break;
        }
    }

    const handleIngredientChange = (index, event, type) => {
        let tmpArray;
        switch (type) {
            case "NAME":
                tmpArray = [...ingredientName];
                tmpArray[index] = event.target.value;
                setIngredientName(tmpArray);
                break;
            case "QUANTITY":
                tmpArray = [...ingredientQuantity];
                tmpArray[index] = event.target.value;
                setIngredientQuantity(tmpArray);
                break;
            case "QUANTITYTYPE":
                tmpArray = [...ingredientQuantityType];
                tmpArray[index] = event.target.value;
                setIngredientQuantityType(tmpArray);
                break;
            default:
                console.log("Err: unhandled param passed");
                break;
        }
    }

    const handleSubmit = () => {
        console.log(recipeName);
        console.log(recipeType);
        console.log(categories);
        console.log(ingredientName);
        console.log(ingredientQuantity);
        console.log(ingredientQuantityType);
    }

    return(
        <div>
            <form>
                <label htmlFor="recipeName">Name: </label>
                <input id="recipeName" type="text" value={ recipeName } onChange={ handleRecipeNameChange } />  <br></br><br></br>

                <label htmlFor="recipeType">Type: </label>
                <input id="type" type="text" value={ recipeType } onChange={ handleRecipeTypeChange } />

                <h3>Categories</h3>
                {categoriesInput.map((cat, index) => (
                    <input key={index} onChange={ (event) => handleCategoriesChange(index, event) } type="text" />
                ))}

                <input type="button" onClick={ () => addNewInput("CATEGORIES") } value="Add Category" />
                
                <h3>Ingredients</h3>
                {ingredientsInput.map((ing, index) => (
                    <div>
                        <input key={index} onChange={ (event) => handleIngredientChange(index, event, "NAME") } type="text" />
                        <input key={index} onChange={ (event) => handleIngredientChange(index, event, "QUANTITY") } type="text" />
                        <input key={index} onChange={ (event) => handleIngredientChange(index, event, "QUANTITYTYPE") } type="text" />
                    </div>
                ))}

                <input type="button" onClick={ () => addNewInput("INGREDIENT") } value="Add Ingredient" />

                <div>
                    <input type="button" onClick={ handleSubmit } value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default SubmitRecipe;