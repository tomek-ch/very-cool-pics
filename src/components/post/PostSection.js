import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import DeletePostButton from './DeletePostButton';
import LikeButton from './LikeButton';
import { Context } from '../../Context';

function PostSection({ postId, post: { authorUsername, authorProfilePic, imgUrl, caption, likes } }) {
    const { currentUser } = useContext(Context);
    const isThisCurrentUsersPost = currentUser.username === authorUsername;

    return (
        <div className="post">
            <Link to={`/${authorUsername}`} className="post-author">
                <div className="profile-picture">
                    <img
                        src={authorProfilePic || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                        alt={authorUsername}
                    />
                </div>
                {authorUsername}
            </Link>
            {isThisCurrentUsersPost ? <DeletePostButton postId={postId} /> : ''}
            <div className="post-image">
                <div className="post-image-inner" style={{backgroundImage: `url(${imgUrl})`}}></div>
            </div>
            <div className="post-caption">
                {caption}
            </div>
            <LikeButton postId={postId} />
            <div className="number-of-likes">
                {likes || 0}
            </div>
        </div>
    );
}

export default PostSection;