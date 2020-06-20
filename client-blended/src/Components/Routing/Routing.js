import React, { useEffect } from "react";
import RenderSearch from "../Search/RenderSearch";
import AdminPanel from "../AdminPanel/AdminPanel";
import { Navigation, NavLink, NavA } from "./RoutingStyles";
import { useRoutes, A } from "hookrouter";

const Routing = () => {
    const routes = {
        "/": () => <RenderSearch />,
        "/adminpanel": () => <AdminPanel />,
    };

    const routeResult = useRoutes(routes);

    return (
        <div>
            <Navigation>
                <ul>
                    <NavLink>
                        <NavA>
                            <A href="/">Search</A>
                        </NavA>
                    </NavLink>
                    <NavLink>
                        <NavA>
                            <A href="/adminpanel">Admin Panel</A>
                        </NavA>
                    </NavLink>
                </ul>
            </Navigation>
            {routeResult}
        </div>
    );
};

export default Routing;
