import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

function Nav() {
    const { currentUser, notifications } = useContext(Context);
    
    return (
        <nav className="nav-bar">
            <Link to="/">
                Feed
            </Link>
            <Link to="/explore">
                Explore
            </Link>
            <Link to="/new-post">
               Add
            </Link>
            <Link to="/notifications">
               Notifications ({notifications.filter(not => not.unread).length})
            </Link>
            <Link to={`/${currentUser.username}`}>
                Me
            </Link>
        </nav>
    );
}

export default Nav;