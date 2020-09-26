import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from '../components/Nav';
import Feed from './Feed';
import Explore from './Explore';
import NewPost from './NewPost';
import UserProfile from './UserProfile';

function MainPage() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route path="/explore">
                    <Explore />
                </Route>
                <Route path="/new-post">
                    <NewPost />
                </Route>
                <Route path="/:username">
                    <UserProfile />
                </Route>
            </Switch>
        </div>
    );
}

export default MainPage;