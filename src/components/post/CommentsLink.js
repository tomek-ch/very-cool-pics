import React from 'react';
import { Link } from 'react-router-dom';

function CommentsLink({ username, postId }) {
    return (
        <Link to={`/${username}/${postId}/comments`}>
            Comments
        </Link>
    );
}

export default CommentsLink;