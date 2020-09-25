import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../firebase';
import { Context } from '../Context';
import UserInfo from '../components/user-profile/UserInfo';
import FollowersSection from '../components/user-profile/FollowersSection';

function UserProfile() {
    
    const { currentUser } = useContext(Context);
    const { username } = useParams();
    
    const isThisCurrentUsersProfile = currentUser.username === username;
    
    const [ user, setUser ] = useState({});
    // const [ following, setFollowing ] = useState([]);
    // const [ followers, setFollowers ] = useState([]);

    useEffect(() => {
        const ref =  db.collection('Users').where('username', '==', username);

        const unsubscribe = ref.onSnapshot(snapshot => {
            const userDoc = snapshot.docs[0];

            if (userDoc) {
                setUser({
                    id: userDoc.id,
                    ...userDoc.data(),
                });
            }
        });
        
        return unsubscribe;
    }, [username]);

    const isUserFollowed = currentUser.following.includes(user.id);

    // useEffect(() => {
    //     if (user) {
    //         db.collection('Users').doc(user.id).collection('following')
    //     }

    //     db.collection('Users').doc(userDoc.id).collection('following').get().then(snapshot => {
    //         const followingArr = [];
    //         for (let doc of snapshot.docs) followingArr.push(doc.data());
    //         setFollowing(followingArr);
    //     });
    // }, [user]);

    
    return (
        <div className="user-profile" >
            <UserInfo
                isThisCurrentUsersProfile={isThisCurrentUsersProfile}
                username={username}
                pic={user.profilePic}
                bio={user.bio}
                userId={user.id}
                isUserFollowed={isUserFollowed}
            />
            <FollowersSection
                following={user.following || []}
                followers={user.followers || []}
                posts={user.posts || []}
            />
        </div>
    );
}

export default UserProfile;