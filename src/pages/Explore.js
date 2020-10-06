import React, { useState } from 'react';

// import { db } from '../firebase';
import ExplorePosts from '../components/explore/ExplorePosts';
import SearchUsersInput from '../components/explore/SearchUsersInput';
import SearchResults from '../components/explore/SearchResults';

function Explore() {

    const [ searchedText, setSearchedText ] = useState('');

    return (
        <div>
            <div className="explore-top">
                <SearchUsersInput text={searchedText} setText={setSearchedText} />
            </div>
            {searchedText
            ? <SearchResults searchedText={searchedText} />
            : <ExplorePosts />}
        </div>
    );
}

export default Explore;