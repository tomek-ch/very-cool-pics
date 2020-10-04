import React from 'react';

import { db } from '../../firebase';

import trash from '../../icons/delete-bin-line.svg';

function DeletePostButton({ postId, handleDelete }) {
    const deletePost = () => {
        db.collection('Posts').doc(postId).delete().then(() => {
            handleDelete(postId);
        });
    };

    return (
        <button onClick={deletePost}>
            <img src={trash} alt="delete post" />
        </button>
    );
}


export default DeletePostButton;