import React from "react";
import Form from "../Form/RenderForm";
import postData from "../Networking/postData";

const SubmitRecipe = () => {
    const handleSubmit = (dataToPost) => {
        postData("http://localhost:8181/recipies", dataToPost);
    };

    return (
        <div>
            <Form data={null} submit="true" handleSubmitClick={(data) => handleSubmit(data)} />
        </div>
    );
};

export default SubmitRecipe;
