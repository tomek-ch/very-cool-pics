import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from '../components/Nav';
import Feed from './Feed';
import Explore from './Explore';
import NewPost from './NewPost';
import UserProfile from './UserProfile';
import Post from './Post';
import Comments from './Comments';
import NotFound from './NotFound';

function MainPage() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route exact path="/explore">
                    <Explore />
                </Route>
                <Route exact path="/new-post">
                    <NewPost />
                </Route>
                <Route exact path="/:username/:postId/comments">
                    <Comments />
                </Route>
                <Route exact path="/:username/:postId">
                    <Post />
                </Route>
                <Route exact path="/:username">
                    <UserProfile />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default MainPage;