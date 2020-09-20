import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../firebase';
import { Context } from '../Context';
import SignOutButton from './SignOutButton';

function UserInfo() {
    
    const { currentUser } = useContext(Context);
    const { username } = useParams();
    const isThisCurrentUsersProfile = currentUser.username === username;

    const [ user, setUser ] = useState({});

    useEffect(() => {
        const getUser = async () => {

            setUser((await db
                .collection('Users')
                .where('username', '==', username)
                .get()).docs[0].data());
        }
        getUser();
    }, [username]);

    
    return (
        <div className="user-info">
            <div className="info-profile-pic">
                <img
                    src={'https://icon-library.com/images/icon-user/icon-user-15.jpg'}
                    alt={username}
                />
            </div>
            <div className="info-username">
                {user.username}
            </div>
            {isThisCurrentUsersProfile ? <SignOutButton /> : ''}
        </div>
    )
}

export default UserInfo;