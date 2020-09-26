import React, { useState } from 'react';

import { db } from '../../firebase';

function BioEditor({ text, userId }) {
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [value, setValue] = useState(text);

    const handleChange = e => {
        const { value } = e.target;
        setValue(value);
    };

    const edit = () => {
        setIsBeingEdited(true);
    };

    const cancel = () => {
        setValue(text);
        setIsBeingEdited(false);
    };

    const save = () => {
        db.collection('Users').doc(userId).update({ bio: value });
        setIsBeingEdited(false);
    };

    return (
        !isBeingEdited ?
            <div className="bio-editor">
                {text}
                <button
                    className="bio-editor-button"
                    onClick={edit}
                >
                    Edit bio
                </button>
            </div> :
            <div className="bio-editor">
                <textarea
                    value={value}
                    onChange={handleChange}
                />
                <button
                    className="bio-editor-button"
                    onClick={cancel}
                >
                    Cancel
                </button>
                <button
                    className="bio-editor-button"
                    onClick={save}
                >
                    Save
                </button>
            </div>
    );
}

export default BioEditor;