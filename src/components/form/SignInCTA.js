import React from 'react';
import { Link } from 'react-router-dom';

function SignInCTA() {
    return (
        <div className="sign-in-up-cta">
            Already have an account?{' '}
            <Link to="/sign-in" className="cancel-button">
                Sign in
            </Link>
        </div>
    );
}

export default SignInCTA;