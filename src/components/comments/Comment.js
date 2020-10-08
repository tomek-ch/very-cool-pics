import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import DeleteCommentButton from './DeleteCommentButton';
import { Context } from '../../Context';
import ProfilePicture from '../ProfilePicture';
import Time from '../Time';

function Comment({ profilePic, username, text, id, post, timestamp }) {
    const { currentUser } = useContext(Context);
    const isThisCurrentUsersComment = currentUser.username === username;
    
    return (
        <div className="comment">
            <Link to={`/${username}`}>
                <ProfilePicture src={profilePic} alt={username} />
            </Link>
            <div>
                <Link to={`/${username}`}>
                    <span className="comment-author">
                        {username}
                    </span>
                </Link>
                <span className="comment-text">
                    {text}
                </span>
                {timestamp ? <Time time={timestamp.toDate()} /> : ''}
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