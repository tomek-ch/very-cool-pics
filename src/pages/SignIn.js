import React from 'react';

import SignInForm from '../components/form/SignInForm'
import SignUpCTA from '../components/form/SignUpCTA';
import ProductImage from '../components/form/ProductImage';

function SignIn() {
    return (
        <div className="sign-in-up-page">
            <ProductImage />
            <div className="form-section">
                <SignInForm />
                <SignUpCTA />
            </div>
        </div>
    );
}

export default SignIn;