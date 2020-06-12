import React, { useState, useRef, useEffect } from "react";
import RecipeList from "../RecipeList/RecipeList";
import getData from "../Networking/getData";
import deleteData from "../Networking/deleteData";
import putData from "../Networking/putData";
import Form from "../Form/Form";

const ManageRecipe = () => {
    const [allRecipies, setAllRecipies] = useState(null);
    const [currentRecipe, setCurrentRecipe] = useState(null);
    const [displayForm, setDisplayForm] = useState(false);

    let abortControllerRef = useRef(null);
    if (abortControllerRef.current === null) {
        abortControllerRef.current = new AbortController();
    }

    const grabData = () => {
        getData("http://localhost:8181/recipies", {
            signal: abortControllerRef.current.signal,
        }).then(
            (data) => {
                setAllRecipies(data);
            },
            (e) => {
                console.warn("[ManageRecipe.js]", e);
            }
        );
    };

    useEffect(() => {
        grabData();

        return () => {
            abortControllerRef.current.abort();
        };
    }, [allRecipies]);

    const handleRecipeClick = (clickedRecipe) => {
        setCurrentRecipe(clickedRecipe);
        setDisplayForm(true);
    };

    const handleDeleteClick = (clickedRecipe) => {
        let tmpArray = [...allRecipies];
        allRecipies.forEach((rec, index) => {
            if (rec._id === clickedRecipe) {
                tmpArray.splice(index, 1);
            }
        });
        setAllRecipies(tmpArray);
        deleteData("http://localhost:8181/recipies/", clickedRecipe);
        setDisplayForm(false);
    };

    const handleUpdateClick = (dataToUpdate) => {
        putData("http://localhost:8181/recipies/" + dataToUpdate.recipeID, dataToUpdate);
        setDisplayForm(false);
    };

    return (
        <div>
            <h2>Manage</h2>

            {allRecipies !== null && (
                <div>
                    <RecipeList
                        data={allRecipies}
                        modify="true"
                        onRecipeClick={(clickedRecipe) => handleRecipeClick(clickedRecipe)}
                    />
                </div>
            )}

            {displayForm && currentRecipe && (
                <Form
                    modify="true"
                    data={currentRecipe}
                    deletable="true"
                    onDeleteClick={(clickedRecipe) => {
                        handleDeleteClick(clickedRecipe);
                    }}
                    onUpdateClick={(dataToUpdate) => {
                        handleUpdateClick(dataToUpdate);
                    }}
                />
            )}
        </div>
    );
};

export default ManageRecipe;
