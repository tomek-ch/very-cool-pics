import React from 'react';


import SignOutButton from './SignOutButton';

function UserInfo({ isThisCurrentUsersProfile, username }) {
    return (
        <div className="user-info">
            <div className="info-profile-pic">
                <img
                    src={'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                    alt={username}
                />
            </div>
            <div className="info-username">
                {username}
            </div>
            {isThisCurrentUsersProfile ? <SignOutButton /> : ''}
        </div>
    )
}

export default UserInfo;