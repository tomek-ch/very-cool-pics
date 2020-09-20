import React from 'react';

function UserNameInput({ handleChange, handleBlur, formData }) {
    return (
        <>
            <label htmlFor="username">
                Username:
            </label>
            <input
                type="text"
                name="username"
                autoComplete="off"
                required
                value={formData.username.value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={!formData.username.valid && formData.username.blurred ? 'invalid' : ''}
            />
            <div className='input-error-message'>
                {formData.username.error}
            </div>
        </>
    );
}

export default UserNameInput;