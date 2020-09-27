import React from 'react';
import { Link } from 'react-router-dom';

function PostSection({ username, profilePic, postImg, caption }) {
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