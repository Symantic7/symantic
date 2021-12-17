import React from 'react';
import { Route, Switch } from 'react-router';
import Category from './containers/Category';
import Favourites from './containers/Favourites';
import Home from './containers/Home';
import Search from './containers/Search';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/favourites'} component={Favourites} />
                <Route exact path={'/search'} component={Search} />
                <Route exact path={'/category'} component={Category} />
            </Switch>
        </>
    );
};
export default Router;
