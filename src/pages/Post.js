import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { db } from '../firebase';
import PostSection from '../components/post/PostSection';
import NotFound from './NotFound';
import Loading from '../components/Loading';

function Post() {
    const { postId } = useParams();
    const [ post, setPost ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    
    const history = useHistory();    
    const handleDelete = () => {
        history.replace('/');
    };

    useEffect(() => {
        db.collection('Posts').doc(postId).get().then(doc => {
            setPost(doc.data());
            setIsLoading(false);
        });
    }, [postId]);

    return (
        isLoading
        ?
        <Loading />
        :
        post
        ?
        <PostSection
            // username={username}
            // profilePic={post.authorProfilePic}
            // postImg={post.imgUrl}
            // caption={post.caption}
            postId={postId}
            post={post}
            handleDelete={handleDelete}
        />
        :
        <NotFound />
    );
}

export default Post;