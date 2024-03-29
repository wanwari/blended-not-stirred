async function getData(url, options) {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Origin: "127.0.0.1:3000",
        },
        ...options,
    });
    return response.json();
}

export default getData;
