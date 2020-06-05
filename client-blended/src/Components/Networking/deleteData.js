async function deleteData(url, id) {
    const response = await fetch(url + id , {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }}).catch((err) => {
            console.log(err);
        });
    return response.json();
}

export default deleteData;