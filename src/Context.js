import React, { createContext, useState, useEffect } from 'react';

import { auth, db } from './firebase';

const Context = createContext();

function ContextProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState(null);

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

    console.log(currentUser)
    return (
        <Context.Provider value={{
            currentUser,
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider };