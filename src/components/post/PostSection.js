import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import DeletePostButton from './DeletePostButton';
import LikeButton from './LikeButton';
import CommentsLink from './CommentsLink';
import { Context } from '../../Context';
import ProfilePicture from '../ProfilePicture';
import Time from '../Time';

function PostSection({ handleDelete, postId, post: { authorUsername, authorProfilePic, imgUrl, caption, likes, authorId, timestamp } }) {
    const { currentUser } = useContext(Context);
    const isThisCurrentUsersPost = currentUser.username === authorUsername;

    const [displayedLikes, setDisplayedLikes] = useState(likes);
    
    const incrementLikes = () => {
        setDisplayedLikes(prev => prev || 0 + 1);
    };
    
    const decrementLikes = () => {
        setDisplayedLikes(prev => prev - 1);
    };

    return (
        <div className="post">
            <div className="post-top">
                <Link to={`/${authorUsername}`} className="post-author">
                    <ProfilePicture src={authorProfilePic} alt={authorUsername} />
                    <div className="post-author-username">
                        {authorUsername}
                    </div>
                </Link>
                {isThisCurrentUsersPost
                ?
                <DeletePostButton postId={postId} handleDelete={handleDelete} authorId={authorId} />
                :
                ''}
            </div>
            <div className="post-image">
                <div className="post-image-inner" style={{backgroundImage: `url(${imgUrl})`}}></div>
            </div>
            <div className="post-bottom">
                <div className="likes-and-comments">
                    <LikeButton
                        postId={postId}
                        authorId={authorId}
                        incrementLikes={incrementLikes}
                        decrementLikes={decrementLikes}
                        postImg={imgUrl}
                    />
                    <CommentsLink postId={postId} />
                </div>
                <div className="number-of-likes">
                    {displayedLikes || 0} {displayedLikes === 1 ? 'like' : 'likes'}
                </div>
                <div className="post-caption">
                    {caption}
                </div>
                <Time time={timestamp.toDate()} />
            </div>
        </div>
    );
}

export default PostSection;