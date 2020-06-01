import React, { useState } from 'react';

const SubmitRecipe = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const [categoriesInput, setCategoriesInput] = useState([""]);
    const [categories, setCategories] = useState([]);

    const [ingredientsInput, setIngredientsInput] = useState([""]);

    const [ingredientName, setIngredientName] = useState([{}, {}]);
    const [ingredientQuantity, setIngredientQuantity] = useState([]);
    const [ingredientQuantityType, setIngredientQuantityType] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleTypeChange = (event) => {  
        setType(event.target.value);
    }

    const handleCategoriesChange = (index, event) => {
        let newArr = [...categories];
        newArr[index] = event.target.value;
        setCategories(newArr);
    }

    const addNewCategories = () => {  
        setCategoriesInput(prevCategories => [...prevCategories, ""]);
    }

    const handleIngredientNameChange = (index, event) => {
        let newArr = [...ingredientName];
        newArr[index] = event.target.value;
        setIngredientName(newArr);
    }

    const handleIngredientQuantityChange = (index, event) => {
        let newArr = [...ingredientQuantity];
        newArr[index] = event.target.value;
        setIngredientQuantity(newArr);
    }

    const handleIngredientQuantityTypeChange = (index, event) => {
        let newArr = [...ingredientQuantityType];
        newArr[index] = event.target.value;
        setIngredientQuantityType(newArr);
    }

    const addNewIngredient = () => {  
        setIngredientsInput(prevName => [...prevName, ""]);
    }

    const handleSubmit = () => {
        console.log("Categories: " + categories);
        console.log("Name: " + ingredientName);
        console.log("Quantity: " + ingredientQuantity);
        console.log("QuantityType: " + ingredientQuantityType);
    }

    return(
        <div>
            <form>
                <label htmlFor="recipeName">Name: </label>
                <input id="recipeName" type="text" value={ name } onChange={ handleNameChange } />  <br></br><br></br>

                <label htmlFor="recipeType">Type: </label>
                <input id="type" type="text" value={ type } onChange={ handleTypeChange } />

                <h3>Categories</h3>
                {categoriesInput.map((cat, index) => (
                    <input key={index} onChange={ (event) => handleCategoriesChange(index, event) } type="text" />
                ))}

                <input type="button" onClick={ addNewCategories } value="Add Category" />
                
                <h3>Ingredients</h3>

                {ingredientsInput.map((ing, index) => (
                    <div>
                        <input key={index} onChange={ (event) => handleIngredientNameChange(index, event) } type="text" />
                        <input key={index} onChange={ (event) => handleIngredientQuantityChange(index, event) } type="text" />
                        <input key={index} onChange={ (event) => handleIngredientQuantityTypeChange(index, event) } type="text" />
                    </div>
                 
                ))}

                <input type="button" onClick={ addNewIngredient } value="Add Ingredient" />

                <div>
                    <input type="button" onClick={ handleSubmit } value="Submit" />
                </div>
                

            </form>

        </div>
    );
}

export default SubmitRecipe;