import React, { useEffect, useState } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import deleteData from '../Networking/deleteData';

const DeleteRecipe = props => {

    const [allRecipies, setAllRecipies] = useState(null);

    useEffect(() => {
        setAllRecipies(props.allRecipies);
    }, [props.allRecipies]);

    const handleRecipeClick = (clickedRecipe) => {
        let tmpArray = [...allRecipies];
        tmpArray.splice(allRecipies.indexOf(clickedRecipe), 1);
        setAllRecipies(tmpArray);
        deleteData('http://localhost:8181/recipies/', clickedRecipe._id);
    }

    return(
        <div>
            <h2>DeleteRecipe.js</h2>

            {(allRecipies !== null) &&
                <RecipeList data={ allRecipies } onRecipeClick={ (clickedRecipe) => handleRecipeClick(clickedRecipe) } />
            }
        </div>
    );
}

export default DeleteRecipe;