import React, { useEffect, useState } from 'react';
import RecipeList from '../RecipeList/RecipeList';

const DeleteRecipe = () => {

    const [allRecipies, setAllRecipies] = useState(null);

    const grabData = () => {
        fetch('http://localhost:8181/recipies')
        .then(res => res.json())
        .then(data => {
            setAllRecipies(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        grabData();
    }, [allRecipies]);

    const handleRecipeClick = (clickedRecipe) => {

        console.log('http://localhost:8181/recipies/' + clickedRecipe._id);
        
        fetch('http://localhost:8181/recipies/' + clickedRecipe._id , {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }}).catch((err) => {
            console.log(err);
        });
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