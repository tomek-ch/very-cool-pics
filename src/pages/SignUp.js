import React from 'react';

import SignUpForm from '../components/form/SignUpForm';
import SignInCTA from '../components/form/SignInCTA';
import Logo from '../components/Logo';

function SignUp() {
    return (
        <div className="sign-in-up-page">
            <SignUpForm />
            <SignInCTA />
        </div>
    );
}

export default SignUp;