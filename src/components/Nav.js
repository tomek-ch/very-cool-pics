import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

import home from '../icons/home-2-line.svg';
import search from '../icons/search-line.svg';
import add from '../icons/add-box-line.svg';
import heart from '../icons/heart-line.svg';
import user from '../icons/user-line.svg';

import homeFill from '../icons/home-2-fill.svg';
import searchFill from '../icons/search-fill.svg';
import addFill from '../icons/add-box-fill.svg';
import heartFill from '../icons/heart-fill.svg';
import userFill from '../icons/user-fill.svg';

function Nav() {
    const { currentUser: { username }, notifications } = useContext(Context);
    const path = useLocation().pathname;
    
    return (
        <nav className="nav-bar">
            <Link to="/" className="nav-link">
                <img src={path === '/' ? homeFill : home} alt="" />
            </Link>
            <Link to="/explore" className="nav-link">
                <img src={path === '/explore' ? searchFill : search} alt="" />
            </Link>
            <Link to="/new-post" className="nav-link">
                <img src={path === '/new-post' ? addFill : add} alt="" />
            </Link>
            <Link to="/notifications" className="nav-link">
                <div className="notifications-icon">
                    <img src={path === '/notifications' ? heartFill : heart} alt="" />
                    <div className="notifications-badge">
                        {notifications.filter(not => not.unread).length}
                    </div>
                </div>
            </Link>
            <Link to={`/${username}`} className="nav-link">
                <img src={path === `/${username}` ? userFill : user} alt="" />
            </Link>
        </nav>
    );
}

export default Nav;