import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';
import Search from '../Search/Search';
import PostTest from '../PostTest/PostTest';
import SubmitRecipe from '../SubmitRecipe/SubmitRecipe';

const Routing = () => {
    return(
        <div>
            <ul>
                <li><Link to="/search">search</Link></li>
                <li><Link to="/posttest" >posttest</Link></li>
                <li><Link to="/submitrecipe" >submitrecipe</Link></li>
            </ul>

            <Switch>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/posttest">
                    <PostTest />
                </Route>
                <Route path="/submitrecipe">
                    <SubmitRecipe />
                </Route>
            </Switch>
        </div>
    )
}

export default Routing;