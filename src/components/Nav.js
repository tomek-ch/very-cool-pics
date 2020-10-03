import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Context } from '../Context';
import home from '../icons/home.svg';
import search from '../icons/search.svg';
import plusSquare from '../icons/plus-square.svg';
import heart from '../icons/heart.svg';
import user from '../icons/user.svg';

function Nav() {
    const { currentUser: { username }, notifications } = useContext(Context);
    const path = useLocation().pathname;
    
    return (
        <nav className="nav-bar">
            <Link to="/" className={`nav-link ${path === '/' ? 'active-link' : ''}`}>
                <img src={home} alt="" />
            </Link>
            <Link to="/explore" className={`nav-link ${path === '/explore' ? 'active-link' : ''}`}>
                <img src={search} alt="" />
            </Link>
            <Link to="/new-post" className={`nav-link ${path === '/new-post' ? 'active-link' : ''}`}>
               <img src={plusSquare} alt="" />
            </Link>
            <Link to="/notifications" className={`nav-link ${path === '/notifications' ? 'active-link' : ''}`}>
                <div className="notifications-icon">
                    <img src={heart} alt="" />
                    <div className="notifications-badge">
                        {notifications.filter(not => not.unread).length}
                    </div>
                </div>
            </Link>
            <Link to={`/${username}`} className={`nav-link ${path === `/${username}` ? 'active-link' : ''}`}>
                <img src={user} alt="" />
            </Link>
        </nav>
    );
}

export default Nav;