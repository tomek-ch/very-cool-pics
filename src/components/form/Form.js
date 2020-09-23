import React, { useState } from 'react';

function Form({ submitCallback, children }) {
    const [ formError, setFormError ] = useState('');
    const [ formData, setFormData ] = useState({
        email: {
            valid: false,
            value: '',
            blurred: false,
            error: 'Please enter your email address.',
        },
        username: {
            valid: false,
            value: '',
            blurred: false,
            error: 'Please enter a username.',
        },
        password: {
            valid: false,
            value: '',
            blurred: false,
            error: 'Please enter your password.',
        },
    });

    const getError = (type, value) => {
        if (type === 'email') {
            if (!value.length) {
                return 'Please enter your email address.';
            }
            if (!/\S+@\S+\.\S+/.test(value)) {
                return 'Email address invalid.';
            }
            return '';
        } else if (type === 'password') {
            if (!value.length) {
                return 'Please enter your password.';
            }
            if (value.length < 6) {
                return 'Password must be at least 6 characters long.';
            }
            return '';
        } else if (type === 'username') {
            if (!value.length) {
                return 'Please enter a username.';
            }
            if (value.length < 3) {
                return 'Username must be at least 3 characters long.';
            }
            if (value.length > 10) {
                return 'Username can\'t be longer than 10 characters.';
            }
            if (!/^\w+$/i.test(value)) {
                return 'Username can only contain letters, numbers and underscores.';
            }
            if (value === 'andrzej') {
                return 'Username already exists. Choose a different one.';
            }
            return '';
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;
        const error = getError(name, value);

        setFormData(prevData => ({
            ...prevData,
            [name]: {
                value: name === 'username' ? value.toLowerCase() : value,
                error: error,
                valid: !error.length,
                blurred: prevData[name].blurred,
            },
        }));
    };

    const handleBlur = e => {
        const { name } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: {
                ...prevFormData[name],
                blurred: true,
            }
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        setFormData(prevFormData => {
            const newFormData = { ...prevFormData };
            for (let key in newFormData) {
                newFormData[key].blurred = true;
            }
            
            return newFormData;
        });

        submitCallback(formData).catch(error => {
            if (error.code === 'auth/wrong-password') {
                setFormError('Provided password is incorrect.');
            } else if (error.code === 'auth/user-not-found') {
                setFormError('User doesn\'t exist.');
            } else if (error.code === 'auth/email-already-in-use') {
                setFormError('An account with this email address already exists.');
            } else if (error.code === 'auth/too-many-requests') {
                setFormError('Too many requests. Wait a few seconds and try again.');
            } else if (error.code === 'Username taken.') {
                setFormError('This username is already taken.')
            } else {
                setFormError(error.message);
            }
        });
    };

    return (
        <form
            className="sign-in-up-form"
            onSubmit={handleSubmit}
            noValidate
        >
            {children.map((child) => (
                    typeof child.type !== 'string' ?
                    React.cloneElement(child, { handleChange, handleBlur, formData, key: child.type }) :
                    child
                )
            )}
            <div className="form-error">
                {formError}
            </div>
        </form>
    );
}

export default Form;