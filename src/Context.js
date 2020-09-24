import React, { createContext, useState, useEffect } from 'react';

import { auth, db } from './firebase';

const Context = createContext();

function ContextProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState(null);
    const [ followedUsers, setFollowedUsers ] = useState([]);

    useEffect(() => {
        const authStateObserver = user => {
            if (user) {
                const { uid } = user;

                const unsubscribe = db.collection('Users').doc(uid).onSnapshot(doc => {
                    setCurrentUser(() => ({
                        id: uid,
                        username: doc.data().username,
                    }));

                    unsubscribe();
                });
            } else {
                setCurrentUser(null);
            }
        };

        auth.onAuthStateChanged(authStateObserver);
    }, []);

    useEffect(() => {
        if (currentUser) {
            db.collection('Users').doc(currentUser.id).collection('following').onSnapshot(snapshot => {
                const followedList = [];
                for (let doc of snapshot.docs) followedList.push(doc.data());
                setFollowedUsers(followedList);
            });
        } else {
            setFollowedUsers([]);
        }
    }, [currentUser]);

    console.log(currentUser)
    return (
        <Context.Provider value={{
            currentUser,
            followedUsers,
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };