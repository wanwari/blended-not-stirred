async function putData(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Origin': '127.0.0.1:3000'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export default putData;