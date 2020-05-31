import React, { useEffect } from 'react';

const PostTest = () => {

    useEffect(() => {
        fetch('http://localhost:8181/submit_recipe', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
            body: JSON.stringify({
                name: "Tropical Smoothie",
                type: "SMOOTHIE",
                ingredients: [
                    {name: "mango", amount: "1", amountType: "diced"},
                    {name: "frozen strawberries", amount: "1", amountType: "cup"},
                    {name: "low-fat vanilla yogurt", amount: "1", amountType: "cup"},
                    {name: "pineapple", amount: "6", amountType: "ounches"},
                    {name: "frozen blueberries", amount: "1/2", amountType: "cup"}
                ],
                categories: ["low_fat", "nut free"]
            })
        })
    });

    return(
        <div>
            <h1>PostTest</h1>
        </div>
    );
}

export default PostTest;