import React from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../firebase';

function DeleteCommentButton({ commentId }) {
    const { postId } = useParams();

    const deleteComment = () => {
        db.collection('Posts').doc(postId).collection('comments').doc(commentId).delete();
    };

    return (
        <button onClick={deleteComment}>
            Delete
        </button>
    );
}


export default DeleteCommentButton;