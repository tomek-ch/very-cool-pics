import React, { useState, useContext } from 'react';

import { db, FieldValue } from '../../firebase';
import { Context } from '../../Context';

function LikeButton({ postId }) {

    const { currentUser: { id, likedPosts } } = useContext(Context);
    const [ isLiked, setIsLiked ] = useState(likedPosts.includes(postId));

    const currentUser = db.collection('Users').doc(id);
    const post = db.collection('Posts').doc(postId);

    const handleClick = () => {
        if (!isLiked) {
            currentUser.update({ likedPosts: FieldValue.arrayUnion(postId) });
            post.update({ likes: FieldValue.increment(1) });
            setIsLiked(true);
        } else {
            currentUser.update({ likedPosts: FieldValue.arrayRemove(postId) });
            post.update({ likes: FieldValue.increment(-1) });
            setIsLiked(false);
        }
    };

    return (
        <button onClick={handleClick}>
            {isLiked ? 'Unlike' : 'Like'}
        </button>
    );
}

export default LikeButton;