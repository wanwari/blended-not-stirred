import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Components/Routing/Routing";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </div>
    );
}

export default App;
