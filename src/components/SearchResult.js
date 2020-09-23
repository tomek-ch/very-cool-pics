import React from 'react';
import { Link } from 'react-router-dom';

function SearchResult({ name, pic }) {
    console.log('rendered ' + name)
    return (
        <Link to={name} className="search-result">
            <div className="profile-picture">
                <img
                    src={pic || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                    alt={name}
                />
            </div>
            <div className="username">
                {name}
            </div>
        </Link>
    );
}

export default SearchResult;