import React from "react";
import { CategoryButton } from "./SearchStyles";

const CategoryButtons = (props) => {
    return (
        <div>
            <CategoryButton
                type="submit"
                onClick={(event) => props.handleBtnClick(event)}
                id={props.id}
                selectedCategories={props.selectedCategories}
                value={props.value}
            />
        </div>
    );
};

export default CategoryButtons;
