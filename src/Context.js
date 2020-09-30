import React, { createContext, useState, useEffect } from 'react';

import { auth, db } from './firebase';

const Context = createContext();

function ContextProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState(null);
    const [ notifications, setNotifications ] = useState([]);
    const [ expectSignIn, setExpectSignIn ] = useState(localStorage.getItem('expectSignIn'));
    // const [ followedUsers, setFollowedUsers ] = useState([]);

    useEffect(() => {
        if (currentUser) {
            const ref = db
                .collection('Users')
                .doc(currentUser.id)
                .collection('notifications')
                .orderBy('timestamp', 'desc');

            ref.onSnapshot(snapshot => {
                const notsArr = snapshot.docs.map(not => ({ id: not.id, ...not.data() }));
                setNotifications(notsArr);
            });
        } else {
            setNotifications([]);
        }
    }, [currentUser]);

    useEffect(() => {
        const authStateObserver = user => {
            if (user) {
                const { uid } = user;

                const unsubscribe = db.collection('Users').doc(uid).onSnapshot(doc => {
                    const { following, followers, likedPosts } = doc.data();

                    setCurrentUser(() => ({
                        id: uid,
                        ...doc.data(),
                        following: following || [],
                        followers: followers || [],
                        likedPosts: likedPosts || [],
                    }));

                    // unsubscribe();
                    setExpectSignIn(true);
                    localStorage.setItem('expectSignIn', '1');
                });

                return unsubscribe;
            } else {
                setCurrentUser(null);
                setExpectSignIn(false);
                localStorage.removeItem('expectSignIn');
            }
        };

        auth.onAuthStateChanged(authStateObserver);
    }, []);

    // useEffect(() => {
    //     if (currentUser) {
    //         db.collection('Users').doc(currentUser.id).collection('following').onSnapshot(snapshot => {
    //             const followedArr = [];
    //             for (let doc of snapshot.docs) followedArr.push(doc.data());
    //             setFollowedUsers(followedArr);
    //         });
    //     } else {
    //         setFollowedUsers([]);
    //     }
    // }, [currentUser]);
    return (
        <Context.Provider value={{
            currentUser,
            expectSignIn,
            notifications,
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };