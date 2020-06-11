async function deleteData(url, id) {
    await fetch(url + id, {
        method: "DELETE",
        mode: "cors",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Origin: "127.0.0.1:3000",
        },
    }).catch((err) => {
        console.log(err);
    });
}

export default deleteData;
