import React, { useState, useEffect } from 'react';

const Form = props => {

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        if (props.modify === "true")
            initIngredients(props.data);

        
    }, [props.data]);

    const initIngredients = (data) => {
        let tmpArray = [...ingredients];

        data.ingredients.map((ing, index) => {
            console.log(ing);
            tmpArray[index] = {
                ingredientName: ing.name,
                ingredientQuantity: ing.amount,
                ingredientQuantityType: ing.amountType
            }
            
        });
        setIngredients(tmpArray);
    }

    const handleIngredientsChange = (index, event, property) => {
        let tmpArray = [...ingredients];
        
        switch(property) {
            case "ingredientName":
                tmpArray[index].ingredientName = event.target.value;
                break;
            case "ingredientQuantity":
                tmpArray[index].ingredientQuantity = event.target.value;
                break;
            case "ingredientQuantityType":
                tmpArray[index].ingredientQuantityType = event.target.value;
                break;
            case "ingredientCalories":
                tmpArray[index].ingredientCalories = event.target.value;
                break;
            default:
                console.log("err");
                break;
                
        }
        setIngredients(tmpArray);
    }

    const handleDeleteCurrentIngredientClick = (index) => {
        let tmpArray = [...ingredients];
        tmpArray.splice(index, 1);
        setIngredients(tmpArray);
    }

    const handleAddIngredientsInput = () => {
        const newIngredient = {
            ingredientName: "",
            ingredientQuantity: 0.0,
            ingredientQuantityType: ""
        }
        setIngredients(prevIng => [...prevIng, newIngredient]);
    }

    const formStructure = (
        <div>
            <h2>Recipe ID</h2>
            <input id="recipeID" type="text" disabled />

            <h2>Recipe Name</h2>
            <input id="recipeName" type="text" />

            <h2>Recipe Type</h2>
            <select>
                <option>Smoothie</option>
                <option>Shake</option>
            </select>

            <h2>Caregories</h2>
            <div>
            <label>
                    <input id="high_protein" type="checkbox" />
                    High Protein
                </label>
                <label>
                    <input id="low_fat" type="checkbox" />
                    Low Fat
                </label>
                <label>
                    <input id="nut_free" type="checkbox" />
                    Nut Free
                </label>
                <label>
                    <input id="low_sugar" type="checkbox" />
                    Low Sugar
                </label>
                <label>
                    <input id="lactose_free" type="checkbox" />
                    Lactose Free
                </label>
                <label>
                    <input id="vegan" type="checkbox" />
                    Vegan
                </label>
            </div>
            
            <h2>Ingredients</h2>
            {ingredients.map((currentIngredient, index) => (
                <div key={ index }>
                    <input type="text" placeholder="Name" 
                        value={currentIngredient.ingredientName}
                        onChange={(event) => handleIngredientsChange(index, event, "ingredientName")}
                    />
                    <input type="number" step="any" placeholder="Quantity" 
                        value={currentIngredient.ingredientQuantity}
                        onChange={(event) => handleIngredientsChange(index, event, "ingredientQuantity")}
                    />
                    <input type="text" placeholder="Quantity Type" 
                        value={currentIngredient.ingredientQuantityType}
                        onChange={(event) => handleIngredientsChange(index, event, "ingredientQuantityType")}
                    />

                    <input id="deleteCurrentIngredient" type="button" value="Delete" onClick={(currentIngredient) => handleDeleteCurrentIngredientClick(index)}/>
                </div>
            ))}
            <input id="addIngredientsInput" type="button" value="Add Ingredient" onClick={handleAddIngredientsInput} />
        </div>
    );

    return(
        <div>
            { formStructure }
        </div>
    );
}

export default Form;