import React from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../firebase';

function DeleteCommentButton({ commentId, post, currentUser }) {
    const { postId } = useParams();

    const deleteComment = () => {
        db.collection('Posts').doc(postId).collection('comments').doc(commentId).delete();

        if (currentUser.username !== post.authorUsername) {
            db.collection('Users').doc(post.authorId).collection('notifications').doc(commentId).delete();
        }
    };

    return (
        <button onClick={deleteComment}>
            Delete
        </button>
    );
}


export default DeleteCommentButton;