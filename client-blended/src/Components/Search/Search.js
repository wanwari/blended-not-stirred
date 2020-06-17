import React from "react";
import RecipeSearch from "../RecipeSearch/RecipeSearch";
import { SearchContainer, Title, SearchBox, SearchBoxInput, SearchBoxButton, Categories } from "./SearchStyles";
import CategoryButtons from "./CategoryButtons";

const Search = (props) => {
    return (
        <SearchContainer>
            <Title>Blended not Stirred</Title>

            <SearchBox>
                <SearchBoxInput
                    type="text"
                    value={props.currentSearch}
                    onChange={props.handleSearchChange}
                    onKeyDown={props.handleKeyDown}
                    placeholder="Mango Shake"
                />
                <SearchBoxButton type="submit" value="Search" onClick={props.handleSearchClick} />
            </SearchBox>

            <Categories>
                <CategoryButtons
                    type="submit"
                    handleBtnClick={(event) => props.handleCategoryClicked(event)}
                    id="high_protein"
                    value="High Protein"
                    selectedCategories={props.selectedCategories}
                />

                <CategoryButtons
                    type="submit"
                    handleBtnClick={(event) => props.handleCategoryClicked(event)}
                    id="low_fat"
                    value="Low Fat"
                    selectedCategories={props.selectedCategories}
                />

                <CategoryButtons
                    type="submit"
                    handleBtnClick={(event) => props.handleCategoryClicked(event)}
                    id="lactose_free"
                    value="Lactose Free"
                    selectedCategories={props.selectedCategories}
                />

                <CategoryButtons
                    type="submit"
                    handleBtnClick={(event) => props.handleCategoryClicked(event)}
                    id="vegan"
                    value="Vegan"
                    selectedCategories={props.selectedCategories}
                />

                <CategoryButtons
                    type="submit"
                    handleBtnClick={(event) => props.handleCategoryClicked(event)}
                    id="nut_free"
                    value="Nut Free"
                    selectedCategories={props.selectedCategories}
                />

                <CategoryButtons
                    type="submit"
                    handleBtnClick={(event) => props.handleCategoryClicked(event)}
                    id="low_sugar"
                    value="Low Sugar"
                    selectedCategories={props.selectedCategories}
                />
            </Categories>

            <div>
                <RecipeSearch result={props.searchValue} recipeCategories={props.selectedCategories} />
            </div>
        </SearchContainer>
    );
};

export default Search;
