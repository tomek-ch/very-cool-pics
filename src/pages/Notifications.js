import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ProfilePicture from '../components/ProfilePicture';
import Time from '../components/Time';
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
            <div
                className="notification-link"
            >
                {/* {not.text} */}
                <div>
                    <Link to={`/${not.username}`} className="notification-user">
                        {not.username + ' '}
                    </Link>
                    <Link to={not.link}>
                        {
                            not.type === 'like'
                            ?
                            'liked your post.'
                            :
                            not.type === 'comment'
                            ?
                            `commented your post: "${not.commentText}".`
                            :
                            'now follows you.'
                        }
                        
                        {not.timestamp ? <Time time={not.timestamp.toDate()} /> : ''}
                    </Link>
                </div>
                
                <Link to={not.link} className="notification-img-link">
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
        </div>
    )
);

    return (
        <div className="notifications-page">
            <header className="activity-header">
                <h2>
                    Activity
                </h2>
            </header>
            {notifications.length ? elements : <div className="notifications-empty">Nothing here yet.</div>}
        </div>
    );
}

export default Notifications;