import React, { useState } from 'react';

function Form({ submitCallback, children }) {
    const [ formData, setFormData ] = useState({
        email: {
            valid: false,
            value: '',
            blurred: false,
            error: '',
        },
        username: {
            valid: false,
            value: '',
            blurred: false,
            error: '',
        },
        password: {
            valid: false,
            value: '',
            blurred: false,
            error: '',
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
            if (value.length < 5) {
                return 'Password must be at least 5 characters long.';
            }
            return '';
        } else if (type === 'username') {
            if (!value.length) {
                return 'Please enter a username.';
            }
            if (value.length < 4) {
                return 'Username must be at least 4 characters long.';
            }
            if (value === 'andrzej') {
                return 'Username already exists. Choose a different one.'
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
                value,
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

        submitCallback(formData);
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
        </form>
    );
}

export default Form;