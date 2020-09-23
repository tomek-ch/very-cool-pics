import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

function Nav() {
    const { currentUser } = useContext(Context);
    
    return (
        <nav className="nav-bar">
            <Link to="/">
                Feed
            </Link>
            <Link to="/explore">
                Explore
            </Link>
            <div>
               Add 
            </div>
            <Link to={currentUser.username}>
                Me
            </Link>
        </nav>
    );
}

export default Nav;