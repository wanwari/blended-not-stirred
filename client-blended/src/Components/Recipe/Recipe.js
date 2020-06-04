import React from 'react';

import Ingredient from '../Ingredient/Ingredient';

const Recipe = props => {

    return(
        <div>
            <h1>{ props.data.name }</h1>
            <h2>{ props.data.type }</h2>
            <Ingredient ingredients={ props.data.ingredients }/>
            {props.data.categories[0]}
        </div>
    );
}

export default Recipe;