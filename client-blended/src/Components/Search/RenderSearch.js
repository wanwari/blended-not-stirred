import React, { useState } from "react";
import Search from "./Search";

const RenderSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const [currentSearch, setCurrentSearch] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleSearchChange = (event) => {
        setCurrentSearch(event.target.value);
    };

    const handleSearchClick = () => {
        setSearchValue(currentSearch);
    };

    const handleCategoryClicked = (event) => {
        const currentCategory = event.target.value;
        const hasCategories = selectedCategories.includes(event.target.value);
        let prevArr = [...selectedCategories];

        if (!hasCategories) prevArr.push(event.target.value);
        else if (hasCategories) prevArr.splice(selectedCategories.indexOf(currentCategory), 1);

        setSelectedCategories(prevArr);
        console.log(prevArr);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") handleSearchClick();
    };

    return (
        <div>
            <Search
                searchValue={searchValue}
                currentSearch={currentSearch}
                selectedCategories={selectedCategories}
                handleSearchChange={(event) => handleSearchChange(event)}
                handleCategoryClicked={(event) => handleCategoryClicked(event)}
                handleKeyDown={(event) => handleKeyDown(event)}
                handleSearchClick={handleSearchClick}
            />
        </div>
    );
};

export default RenderSearch;
