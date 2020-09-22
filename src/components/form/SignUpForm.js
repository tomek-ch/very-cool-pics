import React from 'react';

import Form from './Form';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import UsernameInput from './UsernameInput';
import { auth, db } from '../../firebase';

function SignUpForm() {
    const signUp = async ({ email, password, username }) => {

        if (email.valid && password.valid && username.valid) {

            const isUsernameTaken = await db.collection('Users').where('username', '==', username.value).get();
            // console.log(isUsernameTaken.docs.length)
            if (isUsernameTaken.docs.length) {
                const error = new Error();
                error.code = 'Username taken.';
                throw error;
            };
            // throw { code: 'Username taken.' }

            const { user } = await auth.createUserWithEmailAndPassword(email.value, password.value);
            await db.collection('Users').doc(user.uid).set({
                username: username.value,
            });
        }
    }

    return (
        <Form submitCallback={signUp}>
            <EmailInput />
            <PasswordInput />
            <UsernameInput />
            <button>Sign up</button>
        </Form>
    );
}

export default SignUpForm;