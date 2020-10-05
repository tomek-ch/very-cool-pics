import React from 'react';

import { auth } from '../../firebase';

function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()} className="sign-out-button">
            <i className="ri-logout-box-r-line"></i>
        </button>
    );
}

export default SignOutButton;