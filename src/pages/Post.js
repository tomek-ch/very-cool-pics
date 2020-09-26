import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { db } from '../firebase';

function Post() {
    const { postId, username } = useParams();
    const [ post, setPost ] = useState({});
    
    useEffect(() => {
        db.collection('Posts').doc(postId).get().then(doc => {
            setPost(doc.data());
        });
    }, [postId]);

    return (
        <div className="post">
            <Link to={`/${username}`} className="post-author">
                <div className="profile-picture">
                    <img
                        src={post.authorProfilePic || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                        alt={post.authorUsername}
                    />
                </div>
                {post.authorUsername}
            </Link>
            <div className="post-image">
                <div className="post-image-inner" style={{backgroundImage: `url(${post.imgUrl})`}}></div>
            </div>
            <div className="post-caption">
                {post.caption}
            </div>
        </div>
    );
}

export default Post;