import React from 'react';
import { useParams } from 'react-router-dom';

import CommentsBanner from '../components/comments/CommentsBanner';
import PostComments from '../components/comments/PostComments';

function Comments() {
    const { postId } = useParams();

    return (
        <div className="comments-page">
            <CommentsBanner postId={postId} />
            <PostComments postId={postId} />
        </div>
    );
}

export default Comments;