import React, { useState } from 'react';

const SubmitRecipe = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [categoriesInput, setCategoriesInput] = useState([""]);
    const [categories, setCategories] = useState([]);

    const addNewCategories = () => {
    
        setCategoriesInput(prevCategories => [...prevCategories, ""]);
    }

    const handleCategoriesChange = (index, event) => {
        let newArr = [...categories];
        newArr[index] = event.target.value;
        setCategories(newArr);

    }

    const handleSubmit = () => {
        console.log(categories);
    }

    return(
        <div>
            <form>
                <label htmlFor="recipeName">Name: </label>
                <input id="recipeName" type="text" />  <br></br><br></br>

                <label htmlFor="recipeType">Type: </label>
                <input id="type" type="text" />

                <h3>Categories</h3>
                {categoriesInput.map((cat, index) => (
                    <input key={index} onChange={ (event) => handleCategoriesChange(index, event) } type="text" />
                ))}

                <input type="button" onClick={ addNewCategories } value="Add Category" />
                
                <input type="button" onClick={ handleSubmit } value="Submit" />

            </form>

        </div>
    );
}

export default SubmitRecipe;