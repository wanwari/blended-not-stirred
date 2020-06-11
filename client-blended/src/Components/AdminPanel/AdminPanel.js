import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import SubmitRecipe from "../SubmitRecipe/SubmitRecipe";
import ManageRecipe from "../ManageRecipe/ManageRecipe";

const AdminPanel = () => {
    return (
        <div>
            <h1>Admin Panel</h1>

            <ul>
                <li>
                    <Link to="/adminpanel/submitrecipe">Add Recipe</Link>
                </li>
                <li>
                    <Link to="/adminpanel/managerecipe">Manage Recipe</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/adminpanel/submitrecipe">
                    <SubmitRecipe />
                </Route>
                <Route path="/adminpanel/managerecipe">
                    <ManageRecipe />
                </Route>
            </Switch>
        </div>
    );
};

export default AdminPanel;
