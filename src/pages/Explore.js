import React, { useState } from 'react';

// import { db } from '../firebase';
import SearchUsersInput from '../components/SearchUsersInput';
import SearchResults from '../components/SearchResults';

function Explore() {

    const [ searchedText, setSearchedText ] = useState('');

    return (
        <div>
            <SearchUsersInput text={searchedText} setText={setSearchedText} />
            {searchedText ? <SearchResults searchedText={searchedText} /> : 'Explore'}
        </div>
    );
}

export default Explore;