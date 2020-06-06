import React, { useEffect, useState, useRef } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import getData from '../Networking/getData';
import deleteData from '../Networking/deleteData';

const DeleteRecipe = () => {

    const [allRecipies, setAllRecipies] = useState(null);

    let abortControllerRef = useRef(null);
    if (abortControllerRef.current === null) {
        abortControllerRef.current = new AbortController();
    }

    const grabData = () => {
        getData('http://localhost:8181/recipies', {
            signal: abortControllerRef.current.signal
        })
        .then(data => {
            setAllRecipies(data);
        }, (e) => {
            console.error('API call aborted', e);
        });
    }

    useEffect(() => {
        grabData();

        return () => {
            abortControllerRef.current.abort();
        }
    }, []); 

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