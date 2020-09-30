import React from 'react';

function ProfilePicture({ src, alt }) {
    return (
        <div className="profile-picture">
        <img
            src={src || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
            alt={alt}
        />
    </div>
    );
}

export default ProfilePicture;