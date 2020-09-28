import React from 'react';

import { db } from '../../firebase';

function DeletePostButton({ postId }) {
    const deletePost = () => {
        db.collection('Posts').doc(postId).delete();
    };

    return (
        <button onClick={deletePost}>
            Delete
        </button>
    );
}


export default DeletePostButton;