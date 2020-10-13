import React, { useState, useEffect } from 'react';

import { db } from '../../firebase';
import SearchResult from './SearchResult';
import Loading from '../Loading';

function SearchResults({ searchedText }) {

    const [ isLoading, setIsLoading ] = useState(true);

    const getSearchResults = async text => {
        if (text) {
            const users = await db.collection('Users')
                .orderBy('username')
                .startAt(text.toLowerCase())
                .endAt(text.toLowerCase() + '\uf8ff')
                .get();

            return users.docs;
        }
        return [];
    };

    const [ results, setResults] = useState([]);

    useEffect(() => {
        setIsLoading(true);

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
            setIsLoading(false);
        });
    }, [searchedText]);



    return (
        isLoading
        ?
        <Loading />
        :
        results.length
        ?
        <div className="search-results">
            {results}
        </div>
        :
        <div className="empty-page">
            Nothing found
        </div>
    );
}

export default SearchResults;