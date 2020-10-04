import React from 'react';

import { auth } from '../../firebase';

import logout from '../../icons/logout-box-r-line.svg';

function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            <img src={logout} alt="sign out" />
        </button>
    );
}

export default SignOutButton;