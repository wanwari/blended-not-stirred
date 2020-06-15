import React from "react";
import RecipeSearch from "../RecipeSearch/RecipeSearch";

const Search = (props) => {
    return (
        <div>
            <h1>Search.js</h1>

            <input
                type="text"
                value={props.currentSearch}
                onChange={props.handleSearchChange}
                onKeyDown={props.handleKeyDown}
            />

            <div>
                <label onClick={(event) => event.handleCategoryClicked(event)}>
                    <input type="checkbox" id="high_protein" name="high_protein" value="high_protein" />
                    High Protein
                </label>

                <label onClick={(event) => event.handleCategoryClicked(event)}>
                    <input type="checkbox" id="low_fat" name="low_fat" value="low_fat" />
                    Low Fat
                </label>

                <label onClick={(event) => event.handleCategoryClicked(event)}>
                    <input type="checkbox" id="lactose_free" name="lactose_free" value="lactose_free" />
                    Lactose Free
                </label>

                <label onClick={(event) => event.handleCategoryClicked(event)}>
                    <input type="checkbox" id="vegan" name="vegan" value="vegan" />
                    Vegan
                </label>

                <label onClick={(event) => event.handleCategoryClicked(event)}>
                    <input type="checkbox" id="nut_free" name="nut_free" value="nut_free" />
                    Nut Free
                </label>

                <label onClick={(event) => event.handleCategoryClicked(event)}>
                    <input type="checkbox" id="low_sugar" name="low_sugar" value="low_sugar" />
                    Low Sugar
                </label>
            </div>

            <div>
                <input type="button" value="Search" onClick={props.handleSearchClick} />
                <RecipeSearch result={props.searchValue} recipeCategories={props.selectedCategories} />
            </div>
        </div>
    );
};

export default Search;
