import React from 'react';

function FollowersSection({ postCount, followers, following }) {

    const followingCount = following.length;
    const followersCount = followers.length;

    return (
        <div className="followers-section">
            <div className="post-count">
                <div>
                    {postCount || 0}
                </div>
                <div>
                    posts
                </div>
            </div>
            <div className="followers-count">
                <div>
                    {followersCount}
                </div>
                <div>
                    followers
                </div>
            </div>
            <div className="following-count">
                <div>
                    {followingCount}
                </div>
                <div>
                    following
                </div>
            </div>
        </div>
    );
}

export default FollowersSection;