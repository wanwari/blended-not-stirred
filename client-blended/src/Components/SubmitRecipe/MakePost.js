const MakePost = (dataToPost) => {
    fetch('http://localhost:8181/submit_recipe', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
            body: JSON.stringify({
                name: dataToPost.name,
                type: dataToPost.type,
                ingredients: dataToPost.ingredients,
                categories: dataToPost.categories
            })
        }).then(console.log("SENT REQUEST"));
}

export default MakePost;