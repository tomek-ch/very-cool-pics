import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../Context';
import { db } from '../firebase';
import PostSection from '../components/post/PostSection';

function Feed() {
    const { currentUser: { following, id } } = useContext(Context);
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const ref = db.collection('Posts').where('authorId', 'in', [...following, id]);

        const unsubscribe = ref.onSnapshot(snapshot => {
            const postsArr = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}));
            setPosts(postsArr);
        });

        return unsubscribe;
    }, [following, id]);

    const postElements = posts.map(post => (
        <PostSection
            key={post.id}
            postId={post.id}
            // username={post.authorUsername}
            // profilePic={post.authorProfilePic}
            // postImg={post.imgUrl}
            // caption={post.caption}
            post={post}
        />
    ));

    return (
        <div>
            {postElements}
        </div>
    );
}

export default Feed;