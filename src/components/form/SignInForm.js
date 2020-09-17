import React from 'react';

import Form from './Form';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

function SignInForm() {
    const submitCallback = FormData => {
        if (FormData.email.valid && FormData.password.valid) {
            console.log('logged in!')
        } else {
            console.log('not logged in!')
        }
    }

    return (
        <Form submitCallback={submitCallback}>
            <EmailInput />
            <PasswordInput />
            <button>Sign in</button>
        </Form>
    );
}

export default SignInForm;