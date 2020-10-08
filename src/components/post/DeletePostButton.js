import React from 'react';

import { db } from '../../firebase';

function DeletePostButton({ postId, handleDelete, authorId }) {
    const deletePost = async () => {
        db.collection('Posts').doc(postId).delete().then(() => {
            handleDelete(postId);
        });
        
        const notificationsRef = db.collection('Users')
        .doc(authorId)
        .collection('notifications');

        const nots = await notificationsRef.where('postId', '==', postId).get();

        nots.docs.forEach(not => {
            notificationsRef.doc(not.id).delete();
        });
    };

    return (
        <button onClick={deletePost} className="delete-post-button">
            <i className="ri-delete-bin-line"></i>
        </button>
    );
}


export default DeletePostButton;