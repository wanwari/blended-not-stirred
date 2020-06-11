import React, { useState } from 'react';

import RecipeSearch from '../RecipeSearch/RecipeSearch';

const Search = () => {

    const [searchValue, setSearchValue] = useState("");
    const [currentSearch, setCurrentSearch] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleSearchChange = event => {
        setCurrentSearch(event.target.value);
    }

    const handleSearchClick = () => {
        setSearchValue(currentSearch);
    }

    const handleCategoryClicked = (event) => {
        const currentCategory = event.target.value;
        const checked = event.target.checked;
        const hasCategories = selectedCategories.includes(event.target.value);
        let prevArr = [...selectedCategories];

        if (checked && !hasCategories) {            
            prevArr.push(event.target.value);
            setSelectedCategories(prevArr);
        } else if (!checked && hasCategories) {
            prevArr.splice(selectedCategories.indexOf(currentCategory), 1);
            setSelectedCategories(prevArr);
        }   
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter')
            handleSearchClick();
    }

    return(
        <div>
            <h1>Search.js</h1>

            <input type="text" value={ currentSearch } onChange={ handleSearchChange } onKeyDown={ handleKeyDown } />
            
            <div>
                
                <label onClick={ (event) => handleCategoryClicked(event) }>
                    <input type="checkbox" id="high_protein" name="high_protein" value="high_protein" />
                    High Protein
                </label>
                
                <label onClick={ (event) => handleCategoryClicked(event) }>
                    <input type="checkbox" id="low_fat" name="low_fat" value="low_fat" />
                    Low Fat
                </label>

                <label onClick={ (event) => handleCategoryClicked(event) }>
                    <input type="checkbox" id="lactose_free" name="lactose_free" value="lactose_free" />
                    Lactose Free
                </label>

                <label onClick={ (event) => handleCategoryClicked(event) }>
                    <input type="checkbox" id="vegan" name="vegan" value="vegan" />
                    Vegan
                </label>

                <label onClick={ (event) => handleCategoryClicked(event) }>
                    <input type="checkbox" id="nut_free" name="nut_free" value="nut_free" />
                    Nut Free
                </label>

                <label onClick={ (event) => handleCategoryClicked(event) }>
                    <input type="checkbox" id="low_sugar" name="low_sugar" value="low_sugar" />
                    Low Sugar
                </label>

            </div>
            
            <div>
                <input type="button" value="Search" onClick={ handleSearchClick } />
                <RecipeSearch result={ searchValue } recipeCategories={ selectedCategories } />
            </div>
        </div>
    );
}

export default Search;