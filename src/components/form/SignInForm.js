import React from 'react';

import { auth } from '../../firebase';
import Form from './Form';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import Logo from '../Logo';

function SignInForm() {
    const submitCallback = async ({ email, password }) => {
        if (email.valid && password.valid) {
            await auth.signInWithEmailAndPassword(email.value, password.value);
        }
    }

    return (
        <Form submitCallback={submitCallback}>
            <Logo />
            <EmailInput />
            <PasswordInput />
            <button className="action-button">
                Sign in
            </button>
        </Form>
    );
}

export default SignInForm;