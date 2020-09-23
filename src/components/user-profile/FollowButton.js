import React, { useContext } from 'react';

import { db } from '../../firebase';
import { Context } from '../../Context';

function FollowButton({ idToFollow, username, pic }) {
    const { currentUser: { id } } = useContext(Context);
    console.log(id, idToFollow)

    const followUser = () => {
        db.collection('Users').doc(id).collection('following').doc(idToFollow).set({
            username,
            pic,
        });
    };

    return (
        <div className="follow-button" onClick={followUser}>
            Follow
        </div>
    );
}

export default FollowButton;