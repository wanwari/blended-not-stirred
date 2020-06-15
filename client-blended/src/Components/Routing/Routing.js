import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import RenderSearch from "../Search/RenderSearch";
import AdminPanel from "../AdminPanel/AdminPanel";

const Routing = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/search">search</Link>
                </li>
                <li>
                    <Link to="/adminpanel">Admin Panel</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/search">
                    <RenderSearch />
                </Route>
                <Route path="/adminpanel">
                    <AdminPanel />
                </Route>
            </Switch>
        </div>
    );
};

export default Routing;
