import React from 'react';

import Ingredient from '../Ingredient/Ingredient';

const Recipe = props => {

    return(
        <div>
            <h1>{ props.data.name }</h1>
            <Ingredient ingredients={ props.data.ingredients }/>
            
        </div>
    );
}

export default Recipe;