import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../Context';
import home from '../icons/home.svg';
import search from '../icons/search.svg';
import plusSquare from '../icons/plus-square.svg';
import heart from '../icons/heart.svg';
import user from '../icons/user.svg';

function Nav() {
    const { currentUser, notifications } = useContext(Context);
    
    return (
        <nav className="nav-bar">
            <Link to="/" className="nav-link">
                <img src={home} alt="" />
            </Link>
            <Link to="/explore" className="nav-link">
                <img src={search} alt="" />
            </Link>
            <Link to="/new-post" className="nav-link">
               <img src={plusSquare} alt="" />
            </Link>
            <Link to="/notifications" className="nav-link">
               <img src={heart} alt="" /> ({notifications.filter(not => not.unread).length})
            </Link>
            <Link to={`/${currentUser.username}`} className="nav-link">
                <img src={user} alt="" />
            </Link>
        </nav>
    );
}

export default Nav;