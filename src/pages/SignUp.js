import React from 'react';

import SignUpForm from '../components/form/SignUpForm';
import SignInCTA from '../components/form/SignInCTA';
import Logo from '../components/Logo';

function SignUp() {
    return (
        <div className="sign-in-up-page">
            <div className="form-section">
                <SignUpForm />
                <SignInCTA />
            </div>
        </div>
    );
}

export default SignUp;