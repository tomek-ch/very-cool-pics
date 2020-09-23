import React, { useState, useEffect } from 'react';

import { db } from '../firebase';
import SearchResult from './SearchResult';

function SearchResults({ searchedText }) {

    const getSearchResults = async text => {
        if (text) {
            const users = await db.collection('Users')
                .orderBy('username')
                .startAt(text)
                .endAt(text + '\uf8ff')
                .get();

            return users.docs;
        }
        return [];
    };

    const [ results, setResults] = useState([]);

    useEffect(() => {
        getSearchResults(searchedText).then(users => {
            const resultsElements = [];

            for (let user of users) {
    
                resultsElements.push(
                    <SearchResult
                        key={user.id}
                        name={user.data().username}
                        pic={user.data().profilePic}
                    />
                );
            }

            setResults(resultsElements);
        });
    }, [searchedText]);



    return (
        <div className="search-results">
            {results}
        </div>
    );
}

export default SearchResults;