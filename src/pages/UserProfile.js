import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../firebase';
import { Context } from '../Context';
import UserInfo from '../components/user-profile/UserInfo';
import FollowersSection from '../components/user-profile/FollowersSection';
import UserPosts from '../components/user-profile/UserPosts';
import BioEditor from '../components/user-profile/BioEditor';
import NotFound from './NotFound';

function UserProfile() {
    
    const { currentUser } = useContext(Context);
    const { username } = useParams();
    
    const isThisCurrentUsersProfile = currentUser.username === username;
    
    const [ user, setUser ] = useState({});
    const [ postCount, setPostCount ] = useState(0);
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
        user.username
        ?
        <div className="user-profile" >
            <UserInfo
                isThisCurrentUsersProfile={isThisCurrentUsersProfile}
                username={username}
                pic={user.profilePic}
                userId={user.id}
                isUserFollowed={isUserFollowed}
            />
            {
                isThisCurrentUsersProfile ?
                <BioEditor text={user.bio} userId={user.id} /> :
                <div className="bio">
                    {user.bio}    
                </div>
            }
            <FollowersSection
                following={user.following || []}
                followers={user.followers || []}
                postCount={postCount}
            />
            <UserPosts
                userId={user.id}
                setPostCount={setPostCount}
            />
        </div>
        :
        <NotFound />
    );
}

export default UserProfile;