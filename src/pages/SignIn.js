import React from 'react';

import SignInForm from '../components/form/SignInForm'
import SignUpCTA from '../components/form/SignUpCTA';
import Logo from '../components/Logo';

function SignIn() {
    return (
        <div className="sign-in-up-page">
            <Logo />
            <SignInForm />
            <SignUpCTA />
        </div>
    );
}

export default SignIn;