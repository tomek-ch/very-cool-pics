import React from 'react';

import FollowButton from './FollowButton'
import SignOutButton from './SignOutButton';
import ChangeProfilePicButton from './ChangeProfilePicButton';
import ProfilePicture from '../ProfilePicture';

function UserInfo({ isThisCurrentUsersProfile, isUserFollowed, username, pic, bio, userId }) {
    return (
        <div className="user-info">
            <div className="profile-pic-section">
                <ProfilePicture src={pic} alt={username} />
                {isThisCurrentUsersProfile ?
                <ChangeProfilePicButton userId={userId} /> :
                <FollowButton
                    pic={pic}
                    username={username}
                    idToFollow={userId}
                    isUserFollowed={isUserFollowed}
                />}
            </div>
            <div className="username-and-bio">
                <div className="info-username">
                    {username}
                </div>
            </div>
            {isThisCurrentUsersProfile ? <SignOutButton /> : ''}
        </div>
    );
}

export default UserInfo;