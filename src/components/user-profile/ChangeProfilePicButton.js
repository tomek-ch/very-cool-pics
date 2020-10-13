import React, { useRef } from 'react';

import { storage, db } from '../../firebase';

function ChangeProfilePicButton({ userId }) {

    const fileInput = useRef(null);
    const form = useRef(null);

    const changeProfilePic = async file => {
        const filePath = `profile-pictures/${userId}/${file.name}`;
        const fileSnapshot = await storage.ref(filePath).put(file);

        const url = await fileSnapshot.ref.getDownloadURL();
        db.collection('Users').doc(userId).update({ profilePic: url });
    };

    const onMediaFileSelected = e => {
        e.preventDefault();
        const file = e.target.files[0];
    
        form.current.reset();

        if (file.type.match('image.*')) {
            changeProfilePic(file);
        }
    };

    return (
        <form className="change-pfp-form" onSubmit={e => e.preventDefault()} ref={form}>
            <button
                onClick={() => fileInput.current.click()}
                className="change-pfp-button border-button"
            >
                Change pic
            </button>
            <input
                type="file"
                accept="image/*"
                className="image-input"
                onChange={onMediaFileSelected}
                ref={fileInput}
            />
        </form>
    );
}

export default ChangeProfilePicButton;