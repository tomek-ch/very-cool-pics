import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found-page">
            Not found
            <Link to="/" className="go-back-link">
                Go back
            </Link>
        </div>
    );
}

export default NotFound;