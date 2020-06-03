import React, { useEffect, useState } from 'react';

const DeleteRecipe = () => {

    const [allRecipies, setAllRecipies] = useState(null);

    const grabData = () => {
        fetch('http://localhost:8181/list_all/')
        .then(res => res.json())
        .then(data => {
            setAllRecipies(data);
        });
    }

    useEffect(() => {
        grabData();
    }, []);

    const handleRecipeClick = (index) => {
        console.log('http://localhost:8181/delete_recipe/' + allRecipies[index]._id);
        
        fetch('http://localhost:8181/delete_recipe/' + allRecipies[index]._id , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }})
        
    }

    return(
        <div>
            <h2>DeleteRecipe.js</h2>
            {(allRecipies !== null) &&
                allRecipies.map((reci, index) => (
                <div key={ reci._id }>
                    <input type="button"  onClick={ () => handleRecipeClick(index) } value={ reci._id + " " + reci.name } />
                </div>
                ))
            }
        </div>
    );
}

export default DeleteRecipe;