import React from 'react';

const PostTest = () => {

    const handleSubmit = () => {
        fetch('http://localhost:8181/submit_recipe', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
            body: JSON.stringify({
                name: "New Drink",
                type: "SMOOTHIE",
                ingredients: [
                    {name: "mango", amount: "1", amountType: "diced"},
                    {name: "frozen strawberries", amount: "1", amountType: "cup"},
                ],
                categories: ["low_fat", "nut free"]
            })
        })
    }

    const handleList = () => {
        fetch('http://localhost:8181/list_all/', {
        method: 'POST'});
    }

    const handleDelete = () => {
        fetch('http://localhost:8181/drop_db/', {
        method: 'POST'});
    }

    return(
        <div>
            <input type="button" value="Submit Recipe" onClick={ handleSubmit } />
            <input type="button" value="List All Recipies" onClick={ handleList } />
            <input type="button" value="Delete All Recipe" onClick={ handleDelete } />
        </div>
    );
}

export default PostTest;