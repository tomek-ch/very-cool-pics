import React from 'react';

import FollowButton from './FollowButton'
import SignOutButton from './SignOutButton';
import ChangeProfilePicButton from './ChangeProfilePicButton';
import ProfilePicture from '../ProfilePicture';

function UserInfo({ isThisCurrentUsersProfile, isUserFollowed, username, pic, bio, userId }) {
    return (
        <>
            <div className="user-info">
                <ProfilePicture src={pic} alt={username} />
                <div className="info-username">
                    {username}
                </div>
                {isThisCurrentUsersProfile ? <SignOutButton /> : ''}
            </div>
            {isThisCurrentUsersProfile ?
            <ChangeProfilePicButton userId={userId} /> :
            <FollowButton
                pic={pic}
                username={username}
                idToFollow={userId}
                isUserFollowed={isUserFollowed}
            />}
        </>
    );
}

export default UserInfo;