import React from 'react';

function Comment({ profilePic, username, text }) {
    return (
        <div className="comment">
            <div className="profile-picture">
                <img
                    src={profilePic || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                    alt={username}
                />
            </div>
            <div>
                <div className="comment-text">
                    {text}
                </div>
                <div className="comment-author">
                    {username}
                </div>
            </div>
        </div>
    );
}

export default Comment;