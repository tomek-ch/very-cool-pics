import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../firebase';
import PostSection from '../components/post/PostSection';

function Post() {
    const { postId, username } = useParams();
    const [ post, setPost ] = useState({});
    
    useEffect(() => {
        db.collection('Posts').doc(postId).get().then(doc => {
            setPost(doc.data());
        });
    }, [postId]);

    return (
        <PostSection
            username={username}
            profilePic={post.authorProfilePic}
            postImg={post.imgUrl}
            caption={post.caption}
            postId={postId}
        />
    );
}

export default Post;