import React, { useEffect, useState, useCallback } from 'react';
import RecipeList from '../RecipeList/RecipeList';
import getData from '../Networking/getData';
import deleteData from '../Networking/deleteData';

const DeleteRecipe = () => {

    const [allRecipies, setAllRecipies] = useState(null);
    const [mounted, setMounted] = useState(false);

    /*
    Prevents needing to put grabData as a dependency in useEffect which will cause following warning
    The 'grabData' function makes the dependencies of useEffect Hook change on every render
    https://reactjs.org/docs/hooks-reference.html#usecallback
    */
    const grabData = useCallback(() => {
        if (mounted)
            getData('http://localhost:8181/recipies')
            .then(data => {
                setAllRecipies(data);
            });
    }, [mounted]);
    
    useEffect(() => {
        setMounted(true);
        grabData();

        return () => {
            setMounted(false);
        }
    }, [grabData]); 

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