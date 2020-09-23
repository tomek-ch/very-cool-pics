import React from 'react';

import { auth } from '../../firebase';

function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            Sign out
        </button>
    );
}

export default SignOutButton;