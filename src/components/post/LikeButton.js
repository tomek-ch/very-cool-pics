import React, { useContext } from 'react';

import { db, FieldValue } from '../../firebase';
import { Context } from '../../Context';

function LikeButton({ postId, authorId, setLikes, postImg }) {

    const { currentUser: { id, likedPosts, username, profilePic } } = useContext(Context);
    // const [ isLiked, setIsLiked ] = useState(likedPosts.includes(postId));
    const isLiked = likedPosts.includes(postId);

    const currentUser = db.collection('Users').doc(id);
    const author = db.collection('Users').doc(authorId);
    const post = db.collection('Posts').doc(postId);

    const handleClick = () => {
        if (!isLiked) {
            currentUser.update({ likedPosts: FieldValue.arrayUnion(postId) });
            post.update({ likes: FieldValue.increment(1) });
            // setIsLiked(true);
            setLikes(prev => prev || 0 + 1);

            if (authorId !== currentUser.id) {
                author.collection('notifications').add({
                    // link: `/${postId}`,
                    // text: `${username} liked your post`,
                    type: 'like',
                    sender: id,
                    link: `/post/${postId}`,
                    postId,
                    postImg,
                    username,
                    profilePic: profilePic || '',
                    unread: true,
                    timestamp: FieldValue.serverTimestamp(),
                });
            }

        } else {
            currentUser.update({ likedPosts: FieldValue.arrayRemove(postId) });
            post.update({ likes: FieldValue.increment(-1) });
            // setIsLiked(false);
            setLikes(prev => prev - 1);

            if (authorId !== currentUser.id) {
                author.collection('notifications')
                    .where('postId', '==', postId)
                    .where('sender', '==', id)
                    .get().then(snapshot => {
                        const { id } = snapshot.docs[0];
                        author.collection('notifications').doc(id).delete();
                    });
            }
        }
    };

    return (
        <button onClick={handleClick} className={isLiked ? 'liked-icon' : ''}>
            {isLiked ? <i className="ri-heart-3-fill"></i> : <i className="ri-heart-3-line"></i>}
        </button>
    );
}

export default LikeButton;