import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../firebase';
import PostSection from '../components/post/PostSection';
import NotFound from './NotFound';

function Post() {
    const { postId } = useParams();
    const [ post, setPost ] = useState(null);
    
    useEffect(() => {
        db.collection('Posts').doc(postId).get().then(doc => {
            setPost(doc.data());
        });
    }, [postId]);

    return (
        post
        ?
        <PostSection
            // username={username}
            // profilePic={post.authorProfilePic}
            // postImg={post.imgUrl}
            // caption={post.caption}
            postId={postId}
            post={post}
        />
        :
        <NotFound />
    );
}

export default Post;