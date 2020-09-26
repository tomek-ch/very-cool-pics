import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../../firebase';

function ExplorePosts() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        db.collection('Posts').get().then(snapshot => {
            const postsArr = [];
            snapshot.forEach(post => postsArr.push({
                imgUrl: post.data().imgUrl,
                id: post.id,
                author: post.data().authorUsername,
            }));
            setPosts(postsArr);
        });
    }, []);

    const postsElements = posts.map(post => (
        <Link
            to={`/${post.author}/${post.id}`}
            className="post-thumbnail"
            style={{backgroundImage: `url(${post.imgUrl})`}}
            key={post.id}
        ></Link>
    ));

    return (
        <div className="explore-grid">
            {postsElements}
        </div>
    );
}

export default ExplorePosts;