import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import DeletePostButton from './DeletePostButton';
import { Context } from '../../Context';

function PostSection({ username, profilePic, postImg, caption, postId }) {
    const { currentUser } = useContext(Context);
    const isThisCurrentUsersPost = currentUser.username === username;

    return (
        <div className="post">
            <Link to={`/${username}`} className="post-author">
                <div className="profile-picture">
                    <img
                        src={profilePic || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                        alt={username}
                    />
                </div>
                {username}
            </Link>
            {isThisCurrentUsersPost ? <DeletePostButton postId={postId} /> : ''}
            <div className="post-image">
                <div className="post-image-inner" style={{backgroundImage: `url(${postImg})`}}></div>
            </div>
            <div className="post-caption">
                {caption}
            </div>
        </div>
    );
}

export default PostSection;