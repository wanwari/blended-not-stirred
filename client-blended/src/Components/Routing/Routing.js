import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import RenderSearch from "../Search/RenderSearch";
import AdminPanel from "../AdminPanel/AdminPanel";
import { Navigation, NavLink, NavA } from "./RoutingStyles";

const Routing = () => {
    return (
        <div>
            <Navigation>
                <ul>
                    <NavLink>
                        <NavA>
                            <Link to="/">Search</Link>
                        </NavA>
                    </NavLink>
                    <NavLink>
                        <NavA>
                            <Link to="/adminpanel">Admin Panel</Link>
                        </NavA>
                    </NavLink>
                </ul>
            </Navigation>
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
