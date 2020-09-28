import React from 'react';

import BackButton from './BackButton';
import CommentEditor from './CommentEditor';

function CommentsBanner({ postId }) {
    return (
        <div className="comments-banner">
            <div className="comments-header">
                <BackButton />
                <div className="comments-heading">
                    Comments
                </div>
            </div>
            <CommentEditor postId={postId} />
        </div>
    );
}

export default CommentsBanner;