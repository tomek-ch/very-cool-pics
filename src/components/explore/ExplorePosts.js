import React, { useEffect, useState } from 'react';

import { db } from '../../firebase';

function ExplorePosts() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        db.collection('Posts').get().then(snapshot => {
            const postsArr = [];
            snapshot.forEach(post => postsArr.push({
                imgUrl: post.data().imgUrl,
                id: post.id,
            }));
            setPosts(postsArr);
        });
    }, []);

    const postsElements = posts.map(post => (
        <div
            className="post-thumbnail"
            style={{backgroundImage: `url(${post.imgUrl})`}}
            key={post.id}
        ></div>
    ));

    return (
        <div className="explore-grid">
            {postsElements}
        </div>
    );
}

export default ExplorePosts;