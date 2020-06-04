import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import Search from '../Search/Search';
import AdminPanel from '../AdminPanel/AdminPanel';

const Routing = () => {
    return(
        <div>
            <ul>
                <li><Link to="/search">search</Link></li>
                <li><Link to="/adminpanel">Admin Panel</Link></li>
           </ul>

            <Switch>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/adminpanel">
                    <AdminPanel />
                </Route>
            </Switch>
        </div>
    )
}

export default Routing;