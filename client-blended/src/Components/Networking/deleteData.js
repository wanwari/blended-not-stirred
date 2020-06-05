async function deleteData(url, id) {
    await fetch(url + id , {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }}).catch((err) => {
            console.log(err);
        });
}

export default deleteData;