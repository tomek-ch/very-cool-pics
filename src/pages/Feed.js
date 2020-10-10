import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../Context';
import { db } from '../firebase';
import PostSection from '../components/post/PostSection';
import Logo from '../components/Logo';
import Loading from '../components/Loading';

function Feed() {
    const { currentUser: { following, id } } = useContext(Context);

    // const [ following ] = useState(currentUser.following);
    // const [ id ] = useState(currentUser.id);

    //ref is initialized as state so that a change in context doesn't trigger useEffect()
    const [ ref ] = useState(db.collection('Posts')
        .orderBy('timestamp', 'desc')
        .where('authorId', 'in', [...following, id]))

    const [ posts, setPosts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const handleDelete = (id) => {
        setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    };

    useEffect(() => {
        // const ref = db.collection('Posts').where('authorId', 'in', [...following, id]);

        // const unsubscribe = ref.onSnapshot(snapshot => {
        //     console.log('snapshot')
        //     const postsArr = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        //     setPosts(postsArr);
        // });

        // return unsubscribe;
        ref.get().then(snapshot => {
            // console.log('get')
            const postsArr = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setPosts(postsArr);
            setIsLoading(false);
        })
    }, [ref]);

    const postElements = posts.map(post => (
        <PostSection
            key={post.id}
            postId={post.id}
            // username={post.authorUsername}
            // profilePic={post.authorProfilePic}
            // postImg={post.imgUrl}
            // caption={post.caption}
            post={post}
            handleDelete={handleDelete}
        />
    ));

    return (
        <main className="feed-page">
            <Logo />
            <div className="feed">
                {
                    posts.length
                    ?
                    postElements
                    :
                    isLoading
                    ?
                    <Loading />
                    :
                    <div className="empty-page">
                        Nothing here yet.{' '}
                        <Link to='/explore' className="cancel-button">
                            Find something you like.
                        </Link>
                    </div>
                }
            </div>
        </main>
    );
}

export default Feed;