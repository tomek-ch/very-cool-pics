import React, { useState } from 'react';

// import { db } from '../firebase';
import ExplorePosts from '../components/explore/ExplorePosts';
import SearchUsersInput from '../components/explore/SearchUsersInput';
import SearchResults from '../components/explore/SearchResults';

function Explore() {

    const [ searchedText, setSearchedText ] = useState('');

    return (
        <div>
            <SearchUsersInput text={searchedText} setText={setSearchedText} />
            {searchedText
            ? <SearchResults searchedText={searchedText} />
            : <ExplorePosts />}
        </div>
    );
}

export default Explore;