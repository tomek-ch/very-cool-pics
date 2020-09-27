import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../Context';
import { db } from '../firebase';
import PostSection from '../components/post/PostSection';

function Feed() {
    const { currentUser: { following, id } } = useContext(Context);
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        db.collection('Posts').where('authorId', 'in', [...following, id]).get().then(snapshot => {
            const postsArr = [];
            for (let doc of snapshot.docs) postsArr.push({ ...doc.data(), id: doc.id});
            setPosts(postsArr);
        });
    }, [following, id]);

    const postElements = posts.map(post => (
        <PostSection
            key={post.id}
            username={post.authorUsername}
            profilePic={post.authorProfilePic}
            postImg={post.imgUrl}
            caption={post.caption}
        />
    ));

    return (
        <div>
            {postElements}
        </div>
    );
}

export default Feed;