import React from 'react';

function PasswordInput({ handleChange, handleBlur, formData }) {
    return (
        <>
            <label htmlFor="password">
                Password:
            </label>
            <input
                type="password"
                name="password"
                required
                value={formData.password.value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={!formData.password.valid && formData.password.blurred ? 'invalid' : ''}
            />
            <div className='input-error-message'>
                {formData.password.error}
            </div>
        </>
    );
}

export default PasswordInput;