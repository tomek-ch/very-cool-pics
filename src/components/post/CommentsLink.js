import React from 'react';
import { Link } from 'react-router-dom';

import comments from '../../icons/chat-3-line.svg';

function CommentsLink({ postId }) {
    return (
        <Link to={`/post/${postId}/comments`}>
            <img src={comments} alt="comments" />
        </Link>
    );
}

export default CommentsLink;