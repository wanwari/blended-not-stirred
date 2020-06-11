import React from "react";
import postData from "../Networking/postData";
import Form from "../Form/Form";

const SubmitRecipe = () => {
    const handleSubmit = (dataToPost) => {
        console.log("to post");
        console.log(dataToPost);
        postData("http://localhost:8181/recipies", dataToPost);
    };

    return (
        <div>
            <Form
                data={null}
                submit="true"
                handleSubmitClick={(data) => handleSubmit(data)}
            />
        </div>
    );
};

export default SubmitRecipe;
