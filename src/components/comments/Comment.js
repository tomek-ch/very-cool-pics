import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import DeleteCommentButton from './DeleteCommentButton';
import { Context } from '../../Context';
import ProfilePicture from '../ProfilePicture';

function Comment({ profilePic, username, text, id, post }) {
    const { currentUser } = useContext(Context);
    const isThisCurrentUsersComment = currentUser.username === username;

    return (
        <div className="comment">
            <Link to={`/${username}`}>
                <ProfilePicture src={profilePic} alt={username} />
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
            {
                isThisCurrentUsersComment
                ?
                <DeleteCommentButton currentUser={currentUser} commentId={id} post={post} />
                :
                ''
            }
        </div>
    );
}

export default Comment;