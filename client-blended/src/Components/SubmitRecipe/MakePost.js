const postData = async (url, data) => {

    fetch(url, {
        method: 'POST',
        cache: 'no-store',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
            body: data
        });

}

const MakePost = (dataToPost) => {

        postData('http://localhost:8181/submit_recipe',
        JSON.stringify({
            name: dataToPost.name,
            type: dataToPost.type,
            ingredients: dataToPost.ingredients,
            categories: dataToPost.categories
        }));
}

export default MakePost;