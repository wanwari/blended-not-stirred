import React, { useState } from 'react';
import postData from '../Networking/postData';

const SubmitRecipe = () => {

    const [recipeName, setRecipeName] = useState("");
    const [recipeType, setRecipeType] = useState("");

    const [categoriesInput, setCategoriesInput] = useState([""]);
    const [ingredientsInput, setIngredientsInput] = useState([""]);

    const [categories, setCategories] = useState([]);
    const [ingredientName, setIngredientName] = useState([]);
    const [ingredientQuantity, setIngredientQuantity] = useState([]);
    const [ingredientQuantityType, setIngredientQuantityType] = useState([]);

    const [succesfullySubmitted, setSuccesfullySubmitted] = useState(false);

    const handleSingleInputChange = (event, setHook) => {
        setHook(event.target.value);
    }

    const handleMultipleInputChange = (index, event, hook, setHook) => {
        let tmpArray = [...hook];
        tmpArray[index] = event.target.value;
        setHook(tmpArray);
    }

    const addNewInput = (setHook) => {
        setHook(prevInput => [...prevInput, ""]);
    }

    const handleSubmit = () => {
        var tmpIng = [{}];
        ingredientName.forEach((ing, index) => {
            tmpIng[index] = {name: ingredientName[index], amount: ingredientQuantity[index], amountType: ingredientQuantityType[index]}
        });

        const data = {
            name: recipeName,
            type: recipeType,
            ingredients: tmpIng,
            categories: categories
        };

        postData('http://localhost:8181/recipies', data)
        .then(setSuccesfullySubmitted(true));
    }

    const handleSubmitNewRecipe = () => {
        setSuccesfullySubmitted(false);
        setRecipeName("");
        setRecipeType("");
        setCategoriesInput([""]);
        setIngredientsInput([""]);
    }

    const submitForm = (
        <form>
            <label htmlFor="recipeName">Name: </label>
            <input id="recipeName" type="text" value={ recipeName } onChange={ (event) => handleSingleInputChange(event, setRecipeName) } />  <br></br><br></br>

            <label htmlFor="recipeType">Type: </label>
            <input id="type" type="text" value={ recipeType } onChange={ (event) => handleSingleInputChange(event, setRecipeType) } />

            <h3>Categories</h3>
            {categoriesInput.map((cat, index) => (
                <input key={index} onChange={ (event) => handleMultipleInputChange(index, event, categories, setCategories) } type="text" />
            ))}

            <input type="button" onClick={ () => addNewInput(setCategoriesInput) } value="Add Category" />
            
            <h3>Ingredients</h3>
            {ingredientsInput.map((ing, index) => (
                <div key={index}>
                    <input onChange={ (event) => handleMultipleInputChange(index, event, ingredientName, setIngredientName) } type="text" />
                    <input onChange={ (event) => handleMultipleInputChange(index, event, ingredientQuantity, setIngredientQuantity) } type="text" />
                    <input onChange={ (event) => handleMultipleInputChange(index, event, ingredientQuantityType, setIngredientQuantityType) } type="text" />
                </div>
            ))}

            <input type="button" onClick={ () => addNewInput(setIngredientsInput) } value="Add Ingredient" />

            <div>
                <input type="button" onClick={ handleSubmit } value="Submit" />
            </div>
        </form>
    );

    if (!succesfullySubmitted) {
        return(
            <div>
                { submitForm}
            </div>
        )
    } else {
        return(
            <div>
                Submitted
                <input type="button" value="Add Another Recipe" onClick={ handleSubmitNewRecipe }/>
            </div>
        )
    }
}

export default SubmitRecipe;