import React from 'react';

function FollowersSection({ postCount, followers, following }) {

    const followingCount = following.length;
    const followerCount = followers.length;

    return (
        <div className="followers-section">
            <div className="followers-section-inner">
                <div className="post-count">
                    <div className="count">
                        {postCount}
                    </div>
                    <div>
                        {postCount === 1 ? 'post' : 'posts'}
                    </div>
                </div>
                <div className="followers-count">
                    <div className="count">
                        {followerCount}
                    </div>
                    <div>
                        {followerCount === 1 ? 'follower' : 'followers'}
                    </div>
                </div>
                <div className="following-count">
                    <div className="count">
                        {followingCount}
                    </div>
                    <div>
                        following
                </div>
                </div>
            </div>
        </div>
    );
}

export default FollowersSection;