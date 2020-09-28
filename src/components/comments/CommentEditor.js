import React, { useState, useContext } from 'react';

import { db, FieldValue } from '../../firebase';
import { Context } from '../../Context';

function CommentEditor({ postId }) {

    const [ comment, setComment ] = useState('');
    const { currentUser: { username, profilePic, id } } = useContext(Context);

    const handleChange = e => {
        const { value } = e.target;
        setComment(value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (comment) {
            db.collection('Posts').doc(postId).collection('comments').add({
                authorId: id,
                username,
                profilePic,
                text: comment,
                timestamp: FieldValue.serverTimestamp(),
            });

            setComment('');
        }
    };

    return (
        <div className="comment-editor">
            <div className="profile-picture">
                <img
                    src={profilePic || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                    alt={username}
                />
            </div>
            <form className="comment-form" onSubmit={handleSubmit}>
                <input
                    value={comment}
                    onChange={handleChange}
                    placeholder="Type a comment..."
                />
                <button>
                    Add
                </button>
            </form>
        </div>
    );
}

export default CommentEditor;