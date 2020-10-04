import React from 'react';
import { Link } from 'react-router-dom';

import ProfilePicture from '../ProfilePicture';

function SearchResult({ name, pic }) {
    return (
        <Link to={name} className="search-result">
            <ProfilePicture src={pic} alt={name} />
            <div className="username">
                {name}
            </div>
        </Link>
    );
}

export default SearchResult;