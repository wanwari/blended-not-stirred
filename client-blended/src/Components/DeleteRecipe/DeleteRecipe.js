import React, { useEffect, useState } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import getData from '../Networking/getData';
import deleteData from '../Networking/deleteData';

const DeleteRecipe = () => {

    const [allRecipies, setAllRecipies] = useState(null);

    let controller = new AbortController();
    let signal = controller.signal;

    const grabData = () => {
        getData('http://localhost:8181/recipies', {signal})
        .then(data => {
            setAllRecipies(data);
        });
    }
    
    useEffect(() => {
        grabData();

        return () => {
            controller.abort();
        }
    }, [controller, grabData]); 

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