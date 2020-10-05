import React, { useState } from 'react';

import { db } from '../../firebase';
import pencil from '../../icons/pencil-line.svg';

function BioEditor({ text, userId }) {
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [value, setValue] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setValue(value);
    };

    const edit = () => {
        setValue(text)
        setIsBeingEdited(true);
    };

    const cancel = e => {
        e.preventDefault();
        setValue(text);
        setIsBeingEdited(false);
    };

    const save = e => {
        e.preventDefault();
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
                    <img src={pencil} alt="edit" className="edit-icon" />
                    Edit bio
                </button>
            </div> :
            <form className="bio-editor" onSubmit={save} >
                <textarea
                    value={value}
                    onChange={handleChange}
                    className="bio-textbox"
                />
                <div className="bio-editor-buttons">
                    <button
                        className="bio-editor-button"
                        onClick={cancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="bio-editor-button"
                    >
                        Save
                    </button>
                </div>
            </form>
    );
}

export default BioEditor;