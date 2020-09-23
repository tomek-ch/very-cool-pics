import React from 'react';

import FollowButton from './FollowButton'
import SignOutButton from './SignOutButton';
import ChangeProfilePicButton from './ChangeProfilePicButton';

function UserInfo({ isThisCurrentUsersProfile, username, pic, userId }) {
    return (
        <div className="user-info">
            <div className="profile-pic-section">
                <div className="info-profile-pic">
                    <img
                        src={pic || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                        alt={username}
                    />
                </div>
                {isThisCurrentUsersProfile ?
                <ChangeProfilePicButton userId={userId} /> :
                <FollowButton pic={pic} username={username} idToFollow={userId} />}
            </div>
            <div className="info-username">
                {username}
            </div>
            {isThisCurrentUsersProfile ? <SignOutButton /> : ''}
        </div>
    );
}

export default UserInfo;