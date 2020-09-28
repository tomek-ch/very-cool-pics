import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import DeleteCommentButton from './DeleteCommentButton';
import { Context } from '../../Context';

function Comment({ profilePic, username, text, id }) {
    const { currentUser } = useContext(Context);
    const isThisCurrentUsersComment = currentUser.username === username;

    return (
        <div className="comment">
            <Link to={`/${username}`}>
                <div className="profile-picture">
                    <img
                        src={profilePic || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                        alt={username}
                    />
                </div>
            </Link>
            <div>
                <div className="comment-text">
                    {text}
                </div>
                <Link to={`/${username}`}>
                    <div className="comment-author">
                        {username}
                    </div>
                </Link>
            </div>
            {isThisCurrentUsersComment ? <DeleteCommentButton commentId={id} /> : ''}
        </div>
    );
}

export default Comment;