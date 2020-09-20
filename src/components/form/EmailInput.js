import React from 'react';

function EmailInput({ handleChange, handleBlur, formData }) {
    return (
        <>
            <label htmlFor="email">
                Email address:
            </label>
            <input
                type="email"
                name="email"
                required
                value={formData.email.value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={!formData.email.valid && formData.email.blurred ? 'invalid' : ''}
            />
            <div className='input-error-message'>
                {formData.email.error}
            </div>
        </>
    );
}

export default EmailInput;