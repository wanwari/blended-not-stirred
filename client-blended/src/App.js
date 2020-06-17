import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Components/Routing/Routing";
import styled from "styled-components";

const Background = styled.div`
    background: #ff5f6d;
    background: -webkit-radial-gradient(bottom left, #ffe2b9, #ff5f6d);
    background: -moz-radial-gradient(bottom left, #ffe2b9, #ff5f6d);
    background: radial-gradient(to top right, #ffe2b9, #ff5f6d);
    background-repeat: no-repeat;
    height: 100vh;
    font-family: "Quicksand", sans-serif;
`;

function App() {
    return (
        <Background>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </Background>
    );
}

export default App;
