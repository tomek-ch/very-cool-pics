import React from 'react';
import { Link } from 'react-router-dom';

function SignUpCTA() {
    return (
        <div className="sign-in-up-cta">
            Don't have an account?{' '}
            <Link to="/sign-up">
                Sign up
            </Link>
        </div>
    );
}

export default SignUpCTA;