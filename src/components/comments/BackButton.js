import React from 'react';
import { useHistory } from 'react-router-dom';

import back from '../../icons/arrow-left-s-line.svg';

function BackButton() {
    const history = useHistory();

    return (
        <button className="back-button" onClick={() => history.goBack()}>
            <img src={back} alt="back" />
        </button>
    );
}

export default BackButton;