import React, { useState, useEffect } from 'react';
import Recipe from '../Recipe/Recipe';

const RecipeSearch = (props) => {
    
    const [errors, setErrors] = useState(false);
    const [recipe, setRecipe] = useState("");

    const grabData = (res) => {
        fetch('http://localhost:8181/get_recipe/' + res)
        .then(res => res.json())
        .then(data => {
            setRecipe(data);
            setErrors(false)
        })
        .catch(err => setErrors(err));
    }

    useEffect(() => {
        grabData(props.result);
    }, [props.result]);

    return(
       <div>
            { (!errors && recipe) &&
                <Recipe data={recipe} />
            }
       </div>
    );
}

export default RecipeSearch;