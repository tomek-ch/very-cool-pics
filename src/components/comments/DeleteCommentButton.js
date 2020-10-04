import React from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../firebase';
import trash from '../../icons/delete-bin-line.svg';

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
            <img src={trash} alt="delete" />
        </button>
    );
}


export default DeleteCommentButton;