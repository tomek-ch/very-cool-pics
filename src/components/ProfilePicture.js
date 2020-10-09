import React from 'react';

import user from '../images/user-line.svg';

function ProfilePicture({ src, alt }) {
    return (
        <div className="profile-picture">
        <img
            src={src || user}
            alt={alt}
        />
    </div>
    );
}

export default ProfilePicture;