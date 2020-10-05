import React from 'react';

import { db } from '../../firebase';

function DeletePostButton({ postId, handleDelete }) {
    const deletePost = () => {
        db.collection('Posts').doc(postId).delete().then(() => {
            handleDelete(postId);
        });
    };

    return (
        <button onClick={deletePost} className="delete-post-button">
            <i className="ri-delete-bin-line"></i>
        </button>
    );
}


export default DeletePostButton;