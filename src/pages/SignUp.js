import React from 'react';

import SignUpForm from '../components/form/SignUpForm';
import SignInCTA from '../components/form/SignInCTA';
import ProductImage from '../components/form/ProductImage';

function SignUp() {
    return (
        <div className="sign-in-up-page">
            <ProductImage />
            <div className="form-section">
                <SignUpForm />
                <SignInCTA />
            </div>
        </div>
    );
}

export default SignUp;