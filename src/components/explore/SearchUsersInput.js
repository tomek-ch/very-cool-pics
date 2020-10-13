import React from 'react';

function SearchUsersInput({ text, setText }) {

    const handleChange = e =>{
        const { value } = e.target;
        setText(value);
    };

    return (
        <div className="user-search-input textbox">
            <i className="ri-search-line"></i>
            <input type="text"
                value={text}
                onChange={handleChange}
                placeholder="Search"
                className="search-textfield"
                spellCheck="false"
            />
        </div>
    );
}

export default SearchUsersInput;