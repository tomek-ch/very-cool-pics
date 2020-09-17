import React from 'react';

import Form from './Form';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import UsernameInput from './UsernameInput';

function SignUpForm() {
    const submitCallback = FormData => {
        if (FormData.email.valid && FormData.password.valid && FormData.username.valid) {
            console.log('registered!')
        } else {
            console.log('not registered!')
        }
    }

    return (
        <Form submitCallback={submitCallback}>
            <EmailInput />
            <PasswordInput />
            <UsernameInput />
            <button>Sign up</button>
        </Form>
    );
}

export default SignUpForm;