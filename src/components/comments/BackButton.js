import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton() {
    const history = useHistory();

    return (
        <button className="back-button" onClick={() => history.goBack()}>
            Back
        </button>
    );
}

export default BackButton;