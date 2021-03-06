import React, { useEffect, useState } from 'react';

import { db } from '../../firebase';
import Comment from './Comment';

function PostComments({ postId, post }) {
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        const ref = db.collection('Posts').doc(postId).collection('comments').orderBy('timestamp');

        const unsubscribe = ref.onSnapshot(snapshot => {
            const comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setComments(comments);
        });

        return unsubscribe;
    }, [postId]);

    const commentElements = comments.map(comment => (
        <Comment key={comment.id} {...comment} post={post} />
    ));

    return (
        <div className="post-comments">
            {commentElements}
        </div>
    );
}

export default PostComments;