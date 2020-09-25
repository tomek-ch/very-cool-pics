import React, { useContext } from 'react';

import { db, FieldValue } from '../../firebase';
import { Context } from '../../Context';

function FollowButton({ idToFollow, isUserFollowed }) {
    const { currentUser: { id } } = useContext(Context);

    const switchFollow = () => {
        // const ref = db.collection('Users').doc(id).collection('following').doc(idToFollow);
        // const toFollowRef = db.collection('Users').doc(idToFollow).collection('followers').doc(id);

        // if (!isUserFollowed) {
        //     ref.set({
        //         username,
        //         pic,
        //     });

        //     toFollowRef.set({
        //         username,
        //         pic,
        //     });
        // } else {
        //     ref.delete();
        //     toFollowRef.delete();
        // }

        const currentUser = db.collection('Users').doc(id);
        const userToFollow = db.collection('Users').doc(idToFollow);

        if (!isUserFollowed) {
            currentUser.update({ following: FieldValue.arrayUnion(idToFollow) });
            userToFollow.update({ followers: FieldValue.arrayUnion(id) });
        } else {
            currentUser.update({ following: FieldValue.arrayRemove(idToFollow) });
            userToFollow.update({ followers: FieldValue.arrayRemove(id) });
        }
    };

    return (
        <div className="follow-button" onClick={switchFollow}>
            { isUserFollowed ? 'Unfollow' : 'Follow' }
        </div>
    );
}

export default FollowButton;