import React, { useState } from 'react';

import RecipeSearch from '../RecipeSearch/RecipeSearch';

const Search = () => {

    const [searchValue, setSearchValue] = useState("");
    const [currentSearch, setCurrentSearch] = useState("");

    const handleSearchChange = event => {
        setCurrentSearch(event.target.value);
    }

    const handleSearchClick = () => {
        setSearchValue(currentSearch);
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter')
            handleSearchClick();
    }

    return(
        <div>
            <h1>Search.js</h1>

            <input type="text" value={ currentSearch } onChange={ handleSearchChange } onKeyDown={ handleKeyDown } />
            <input type="button" value="Search" onClick={ handleSearchClick } />
            <RecipeSearch result={ searchValue } />

        </div>
    );
}

export default Search;