import React from 'react';

import BioEditor from './BioEditor';
import FollowButton from './FollowButton'
import SignOutButton from './SignOutButton';
import ChangeProfilePicButton from './ChangeProfilePicButton';

function UserInfo({ isThisCurrentUsersProfile, isUserFollowed, username, pic, bio, userId }) {
    return (
        <div className="user-info">
            <div className="profile-pic-section">
                <div className="profile-picture">
                    <img
                        src={pic || 'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                        alt={username}
                    />
                </div>
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
                {isThisCurrentUsersProfile ?
                <BioEditor text={bio} userId={userId} /> :
                <div className="bio">
                    {bio}    
                </div>}
            </div>
            {isThisCurrentUsersProfile ? <SignOutButton /> : ''}
        </div>
    );
}

export default UserInfo;