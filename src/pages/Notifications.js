import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../components/ProfilePicture';

import { Context } from '../Context';
import { db } from '../firebase';

function Notifications() {

    const { notifications, currentUser: { id } } = useContext(Context);

    useEffect(() => {
        const unread = notifications.filter(not => not.unread);

        unread.forEach(not => {
            const notRef = db.collection('Users').doc(id).collection('notifications').doc(not.id);
            notRef.update({ unread: false });
        });
    }, [notifications, id]);

    const elements = notifications.map(not => (
        <div key={not.id} className="notification">
            <Link to={`/${not.username}`}>
                <ProfilePicture src={not.profilePic} alt={not.username} />
            </Link>
            <Link
                to={not.link}
                className="notification-link"
            >
                {not.text}
                {
                    not.postImg
                    ?
                    <div className="notification-post-img">
                        <img src={not.postImg} alt="Your post" />
                    </div>
                    :
                    ''
                }
            </Link>
        </div>
    )
);

    return (
        <div className="notifications-page">
            {notifications.length ? elements : 'Nothing here yet'}
        </div>
    );
}

export default Notifications;