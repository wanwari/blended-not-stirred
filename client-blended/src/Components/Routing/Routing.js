import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import Search from '../Search/Search';
import PostTest from '../PostTest/PostTest';

const Routing = () => {
    return(
        <div>
            <ul>
                <li><Link to="/search">Search Recipe</Link></li>
                <li><Link to="/posttest" >Submit Recipe</Link></li>
            </ul>

            <Switch>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/posttest">
                <PostTest />
            </Route>
            </Switch>
        </div>
    )
}

export default Routing;