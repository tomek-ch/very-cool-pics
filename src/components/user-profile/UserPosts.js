import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../../firebase';

function UserPosts({ userId }) {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        if (userId) {
            db.collection('Posts').where('authorId', '==', userId).get().then(snapshot => {
                const postsArr = [];
                snapshot.forEach(post => postsArr.push({
                    imgUrl: post.data().imgUrl,
                    id: post.id,
                    author: post.data().authorUsername,
                }));
                setPosts(postsArr);
            });
        }
        
    }, [userId]);

    const postsElements = posts.map(post => (
        <Link
            to={`/${post.author}/${post.id}`}
            className="post-thumbnail"
            style={{backgroundImage: `url(${post.imgUrl})`}}
            key={post.id}
        />
    ));

    return (
        <div className="user-posts">
            {postsElements}
        </div>
    );
}

export default UserPosts;