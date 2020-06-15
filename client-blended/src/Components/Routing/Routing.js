import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import RenderSearch from "../Search/RenderSearch";
import AdminPanel from "../AdminPanel/AdminPanel";

const Routing = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">search</Link>
                </li>
                <li>
                    <Link to="/adminpanel">Admin Panel</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/adminpanel">
                    <AdminPanel />
                </Route>
                <Route path="/">
                    <RenderSearch />
                </Route>
            </Switch>
        </div>
    );
};

export default Routing;
