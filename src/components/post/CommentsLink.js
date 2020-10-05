import React from 'react';
import { Link } from 'react-router-dom';

function CommentsLink({ postId }) {
    return (
        <Link to={`/post/${postId}/comments`}>
            <i className="ri-chat-3-line"></i>
        </Link>
    );
}

export default CommentsLink;