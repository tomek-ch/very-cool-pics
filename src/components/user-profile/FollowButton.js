import React, { useContext } from 'react';

import { db } from '../../firebase';
import { Context } from '../../Context';

function FollowButton({ idToFollow, username, pic, isUserFollowed }) {
    const { currentUser: { id } } = useContext(Context);

    const switchFollow = () => {
        const ref = db.collection('Users').doc(id).collection('following').doc(idToFollow);
        if (!isUserFollowed) {
            ref.set({
                username,
                pic,
            });
        } else {
            ref.delete();
        }
    };

    return (
        <div className="follow-button" onClick={switchFollow}>
            { isUserFollowed ? 'Unfollow' : 'Follow' }
        </div>
    );
}

export default FollowButton;