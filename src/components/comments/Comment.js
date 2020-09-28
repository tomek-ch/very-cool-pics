import React, { useContext } from 'react';

import DeleteCommentButton from './DeleteCommentButton';
import { Context } from '../../Context';

function Comment({ profilePic, username, text, id }) {
    const { currentUser } = useContext(Context);
    const isThisCurrentUsersComment = currentUser.username === username;

    return (
        <div className="comment">
            <div className="profile-picture">
                <img
                    src={profilePic || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                    alt={username}
                />
            </div>
            <div>
                <div className="comment-text">
                    {text}
                </div>
                <div className="comment-author">
                    {username}
                </div>
            </div>
            {isThisCurrentUsersComment ? <DeleteCommentButton commentId={id} /> : ''}
        </div>
    );
}

export default Comment;