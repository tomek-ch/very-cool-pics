import React from 'react';
import { Link } from 'react-router-dom';

function CommentsLink({ postId }) {
    return (
        <Link to={`/post/${postId}/comments`}>
            Comments
        </Link>
    );
}

export default CommentsLink;