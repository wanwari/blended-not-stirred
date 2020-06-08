import React, { useState, useEffect } from 'react';

const RecipeForm = (props) => {

    const [id, setId] = useState(props.data._id);
    const [name, setName] = useState(props.data.name);
    const [type, setType] = useState(props.data.type);
    const [categories, setCategories] = useState(props.data.categories);
    const [ingredientsName, setIngredientsName] = useState([]);
    const [ingredientsAmount, setIngredientsAmount] = useState([]);
    const [ingredientsAmountType, setIngredientsAmountTYpe] = useState([]);

    const handleIdChange = event => setId(event.target.value);
    const handleNameChange = event => setName(event.target.value);
    const handleTypeChange = event => setType(event.target.value);
    const handleCategoriesChange = (index, event) => {
        let tmpArr = [...categories];
        tmpArr[index] = event.target.value;
        setCategories(tmpArr);
    }

    const handleIngredientChange = (index, event, hook, setHook) => {
        let tmpArray = [...hook];
        tmpArray[index] = event.target.value;
        setHook(tmpArray);
    }
    useEffect(() => {
        let n = [];
        let a = [];
        let aT = [];
        props.data.ingredients.forEach((ing) => {
            n.push(ing.name);
            a.push(ing.amount);
            aT.push(ing.amountType);
        });

        setId(props.data._id);
        setName(props.data.name);
        setType(props.data.type);
        setIngredientsName(n);
        setIngredientsAmount(a);
        setIngredientsAmountTYpe(aT);
    }, [props.data, props.deletable]);

    const handleDeleteClick = () => {
        props.onDeleteClick(id);
    }

    const handleUpdateClick = () => {
        const dataToUpdate = {
            _id: id,
            name: name,
            type: type,
            categories: categories,
            ingredients: []
        }
        ingredientsName.forEach((ing, index) => {
            console.log(index);
            dataToUpdate.ingredients.push({
                name: ingredientsName[index],
                amount: ingredientsAmount[index],
                amountType: ingredientsAmountType[index]
            });
        });
        props.onUpdateClick(dataToUpdate);
    }

    return(
        <div>

        <label htmlFor="recipeId">Id: </label>
        <input id="recipeId" type="text" disabled value={ id } onChange={ handleIdChange } />

        <label htmlFor="recipeName">Name: </label>
        <input id="recipeName" type="text" value={ name } onChange={ handleNameChange } />

        <label htmlFor="recipeType">Type: </label>
        <input id="recipeType" type="text" value={ type } onChange={ handleTypeChange } />

        <h3>Categories</h3>
        {categories.map((cat, index) => (
            <input key={ index } type="text" value={categories[index]} onChange={ (event) => handleCategoriesChange(index, event) } />
        ))}

        <h3>Ingredients</h3>
        
        {ingredientsName.map((ing, index) => (
            <div key={ index }>
                <input type="text" value={ingredientsName[index]} onChange={ (event) => handleIngredientChange(index, event, ingredientsName, setIngredientsName) } />
                <input type="text" value={ingredientsAmount[index]} onChange={ (event) => handleIngredientChange(index, event, ingredientsAmount, setIngredientsAmount) } />
                <input type="text" value={ingredientsAmountType[index]} onChange={ (event) => handleIngredientChange(index, event, ingredientsAmountType, setIngredientsAmountTYpe) } />
            </div>
        ))}
        {(props.deletable === "true") && 
            <input type="button" value="Delete" onClick={ handleDeleteClick } />
        }
        <input type="button" value="Update" onClick={ handleUpdateClick } />
    </div>
    );
}

export default RecipeForm;