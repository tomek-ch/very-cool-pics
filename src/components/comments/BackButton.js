import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton() {
    const history = useHistory();

    return (
        <button className="back-button" onClick={() => history.goBack()}>
            <i className="ri-arrow-left-s-line"></i>
        </button>
    );
}

export default BackButton;