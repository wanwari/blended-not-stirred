import React, { useState } from 'react';

import RecipeSearch from '../RecipeSearch/RecipeSearch';

const Search = () => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value)
    }

    return(
        <div>
            <h1>Search.js</h1>

            <input type="text" value={ searchValue } onChange={ handleSearchChange } />
            <RecipeSearch result={ searchValue } />

        </div>
    );
}

export default Search;