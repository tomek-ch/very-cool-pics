import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../../firebase';

function UserPosts({ userId, setPostCount }) {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        if (userId) {
            db.collection('Posts')
            .where('authorId', '==', userId)
            .orderBy('timestamp', 'desc')
            .get().then(snapshot => {
                const postsArr = [];
                snapshot.forEach(post => postsArr.push({
                    imgUrl: post.data().imgUrl,
                    id: post.id,
                    author: post.data().authorUsername,
                }));
                setPosts(postsArr);
                setPostCount(postsArr.length);
            });
        }
        
    }, [userId, setPostCount]);

    const postsElements = posts.map(post => (
        <Link
            to={`/post/${post.id}`}
            className="post-thumbnail"
            style={{backgroundImage: `url(${post.imgUrl})`}}
            key={post.id}
        />
    ));

    return (
        posts.length
        ?
        <div className="user-posts">
            {postsElements}
        </div>
        :
        <div className="empty-page">
            This user hasn't posted anything yet.
        </div>
    );
}

export default UserPosts;