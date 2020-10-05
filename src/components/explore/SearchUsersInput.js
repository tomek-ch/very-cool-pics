import React from 'react';

function SearchUsersInput({ text, setText }) {

    const handleChange = e =>{
        const { value } = e.target;
        setText(value);
    };

    return (
        <input type="text"
            className="user-search-input textbox"
            value={text}
            onChange={handleChange}
            placeholder="Search"
        />
    );
}

export default SearchUsersInput;