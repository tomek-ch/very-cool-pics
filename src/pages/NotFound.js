import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="empty-page">
            Requested page couldn't be found.{' '}
            <Link to="/" className="cancel-button">
                Go back.
            </Link>
        </div>
    );
}

export default NotFound;