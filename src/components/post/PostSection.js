import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import DeletePostButton from './DeletePostButton';
import LikeButton from './LikeButton';
import CommentsLink from './CommentsLink';
import { Context } from '../../Context';
import ProfilePicture from '../ProfilePicture';

function PostSection({ handleDelete, postId, post: { authorUsername, authorProfilePic, imgUrl, caption, likes, authorId } }) {
    const { currentUser } = useContext(Context);
    const isThisCurrentUsersPost = currentUser.username === authorUsername;

    const [displayedLikes, setDisplayedLikes] = useState(likes);
    
    return (
        <div className="post">
            <div className="post-top">
                <Link to={`/${authorUsername}`} className="post-author">
                    <ProfilePicture src={authorProfilePic} alt={authorUsername} />
                    {authorUsername}
                </Link>
                {isThisCurrentUsersPost ? <DeletePostButton postId={postId} handleDelete={handleDelete} /> : ''}
            </div>
            <div className="post-image">
                <div className="post-image-inner" style={{backgroundImage: `url(${imgUrl})`}}></div>
            </div>
            <div className="post-caption">
                {caption}
            </div>
            <div className="number-of-likes">
                {displayedLikes || 0} {displayedLikes === 1 ? 'like' : 'likes'}
            </div>
            <div className="likes-and-comments">
                <LikeButton postId={postId} authorId={authorId} setLikes={setDisplayedLikes} postImg={imgUrl} />
                <CommentsLink postId={postId} />
            </div>
        </div>
    );
}

export default PostSection;