import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../firebase';
import { Context } from '../Context';
import UserInfo from '../components/UserInfo';

function UserProfile() {
    
    const { currentUser } = useContext(Context);
    const { username } = useParams();
    const isThisCurrentUsersProfile = currentUser.username === username;

    // const [ user, setUser ] = useState({});

    // useEffect(() => {
    //     const getUser = async () => {

    //         setUser((await db
    //             .collection('Users')
    //             .where('username', '==', username)
    //             .get()).docs[0].data());
    //     }
    //     getUser();
    // }, [username]);

    
    return (
        <div className="user-profile" >
            <UserInfo
                isThisCurrentUsersProfile={isThisCurrentUsersProfile}
                username={username}
            />
        </div>
    );
}

export default UserProfile;