import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import SubmitRecipe from '../SubmitRecipe/SubmitRecipe';
import DeleteRecipe from '../DeleteRecipe/DeleteRecipe';

const AdminPanel = () => {
    return(
        <div>
            <h1>Admin Panel</h1>

            <ul>
                <li><Link to="/adminpanel/submitrecipe">Add Recipe</Link></li>
                <li><Link to="/adminpanel/deleterecipe">Delete Recipe</Link></li>
                <li><Link to="">Change Recipe</Link></li>
            </ul>
            
            <Switch>
                <Route path="/adminpanel/submitrecipe">
                    <SubmitRecipe />
                </Route>
                <Route path="/adminpanel/deleterecipe">
                    <DeleteRecipe />
                </Route>
            </Switch>
        </div>
    );
}

export default AdminPanel;