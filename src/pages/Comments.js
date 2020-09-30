import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../firebase';
import CommentsBanner from '../components/comments/CommentsBanner';
import PostComments from '../components/comments/PostComments';

function Comments() {
    const { postId } = useParams();

    const [ post, setPost ] = useState(null);

    useEffect(() => {
        db.collection('Posts').doc(postId).get().then(doc => {
            setPost(doc.data());
        });
    }, [postId]);

    return (
        <div className="comments-page">
            <CommentsBanner postId={postId} post={post} />
            <PostComments postId={postId} post={post} />
        </div>
    );
}

export default Comments;