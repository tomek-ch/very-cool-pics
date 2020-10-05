import React, { useState, useContext } from 'react';

import { db, FieldValue } from '../../firebase';
import { Context } from '../../Context';
import ProfilePicture from '../ProfilePicture';

function CommentEditor({ postId, post }) {

    const [ comment, setComment ] = useState('');
    const { currentUser: { username, profilePic, id } } = useContext(Context);

    const handleChange = e => {
        const { value } = e.target;
        setComment(value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (comment) {
            setComment('');
            
            const docId = db.collection('Posts').doc(postId).collection('comments').doc().id;

            db.collection('Posts').doc(postId).collection('comments').doc(docId).set({
                authorId: id,
                username,
                profilePic: profilePic || '',
                text: comment,
                timestamp: FieldValue.serverTimestamp(),
            });

            if (id !== post.authorId) {
                const author = db.collection('Users').doc(post.authorId);

                author.collection('notifications').doc(docId).set({
                    text: `${username} commented your post: "${comment}"`,
                    sender: id,
                    link: `/post/${postId}/comments`,
                    postImg: post.imgUrl,
                    username,
                    profilePic: profilePic || '',
                    unread: true,
                    timestamp: FieldValue.serverTimestamp(),
                });
            }
        }
    };

    return (
        <div className="comment-editor">
            <ProfilePicture src={profilePic} alt={username} />
            <form className="comment-form" onSubmit={handleSubmit}>
                <input
                    value={comment}
                    onChange={handleChange}
                    placeholder="Type a comment..."
                    className="comment-input"
                />
                <button className="add-comment-button action-button">
                    Add
                </button>
            </form>
        </div>
    );
}

export default CommentEditor;