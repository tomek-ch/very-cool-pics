import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

function Nav() {
    const { currentUser: { username }, notifications } = useContext(Context);
    const path = useLocation().pathname;
    
    const unreadNumber = notifications.filter(not => not.unread).length;

    return (
        <nav className="nav-bar">
            <Link to="/" className="nav-link">
                {path === '/' ? <i className="ri-home-2-fill"></i> : <i className="ri-home-2-line"></i>}
            </Link>
            <Link to="/explore" className="nav-link">
                {path === '/explore' ? <i className="ri-search-fill"></i> : <i className="ri-search-line"></i>}
            </Link>
            <Link to="/new-post" className="nav-link">
                {path === '/new-post' ? <i className="ri-add-box-fill"></i> : <i className="ri-add-box-line"></i>}
            </Link>
            <Link to="/notifications" className="nav-link">
                <div className="notifications-icon">
                    {path === '/notifications' ? <i className="ri-heart-3-fill"></i> : <i className="ri-heart-3-line"></i>}
                    {

                    }
                    {
                        unreadNumber
                        ?
                        <div className="notifications-badge">
                            {unreadNumber}
                        </div>
                        :
                        ''
                    }
                </div>
            </Link>
            <Link to={`/${username}`} className="nav-link">
                {path === `/${username}` ? <i className="ri-user-fill"></i> : <i className="ri-user-line"></i>}
            </Link>
        </nav>
    );
}

export default Nav;