import React, { useEffect, useState, useRef } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import SubmitRecipe from '../SubmitRecipe/SubmitRecipe';
import DeleteRecipe from '../DeleteRecipe/DeleteRecipe';
import ChangeRecipe from '../ChangeRecipe/ChangeRecipe';
import getData from '../Networking/getData';

const AdminPanel = () => {

    const [allRecipies, setAllRecipies] = useState(null);

    let abortControllerRef = useRef(null);
    if (abortControllerRef.current === null) {
        abortControllerRef.current = new AbortController();
    }

    const grabData = () => {
        getData('http://localhost:8181/recipies', {
            signal: abortControllerRef.current.signal
        })
        .then(data => {
            setAllRecipies(data);
        }, (e) => {
            console.error('API call aborted', e);
        });
    }

    useEffect(() => {
        grabData();

        return () => {
            abortControllerRef.current.abort();
        }
    }, []);

    return(
        <div>
            <h1>Admin Panel</h1>

            <ul>
                <li><Link to="/adminpanel/submitrecipe">Add Recipe</Link></li>
                <li><Link to="/adminpanel/deleterecipe">Delete Recipe</Link></li>
                <li><Link to="/adminpanel/changerecipe">Change Recipe</Link></li>
            </ul>
            
            <Switch>
                <Route path="/adminpanel/submitrecipe">
                    <SubmitRecipe />
                </Route>
                <Route path="/adminpanel/deleterecipe">
                    <DeleteRecipe allRecipies={ allRecipies } />
                </Route>
                <Route path="/adminpanel/changerecipe">
                    <ChangeRecipe />
                </Route>
            </Switch>
        </div>
    );
}

export default AdminPanel;