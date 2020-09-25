import React from 'react';

function FollowersSection({ posts, followers, following }) {

    const followingCount = following.length;
    const followerCount = followers.length;
    const postCount = posts.length;

    return (
        <div className="followers-section">
            <div className="post-count">
                <div>
                    {postCount}
                </div>
                <div>
                    posts
                </div>
            </div>
            <div className="followers-count">
                <div>
                    {followerCount}
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