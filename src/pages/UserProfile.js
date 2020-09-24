import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../firebase';
import { Context } from '../Context';
import UserInfo from '../components/user-profile/UserInfo';

function UserProfile() {
    
    const { currentUser, followedUsers } = useContext(Context);
    const { username } = useParams();
    
    const isThisCurrentUsersProfile = currentUser.username === username;
    const isUserFollowed = followedUsers.find(user => user.username === username);

    const [ user, setUser ] = useState({});

    useEffect(() => {
        const ref =  db.collection('Users').where('username', '==', username);

        const unsubscribe = ref.onSnapshot(snapshot => {
            const userDoc = snapshot.docs[0];

            setUser({
                id: userDoc.id,
                ...userDoc.data(),
            });

        });
        
        return unsubscribe;
    }, [username]);

    
    return (
        <div className="user-profile" >
            <UserInfo
                isThisCurrentUsersProfile={isThisCurrentUsersProfile}
                username={username}
                pic={user.profilePic}
                userId={user.id}
                isUserFollowed={isUserFollowed}
            />
        </div>
    );
}

export default UserProfile;