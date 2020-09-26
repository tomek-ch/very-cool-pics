import React, { useRef, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { db, storage } from '../firebase';
import { Context } from '../Context';

function NewPost() {
    const { currentUser } = useContext(Context);
    const history = useHistory();

    const fileInput = useRef(null);
    const form = useRef(null);

    const [ text, setText ] = useState('');
    const [ previewImgUrl, setPreviewImgUrl ] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const file = fileInput.current.files[0];
        
        if (file) {
            const filePath = `posts/${currentUser.id}/${file.name}`;
            const fileSnapshot = await storage.ref(filePath).put(file);
    
            const url = await fileSnapshot.ref.getDownloadURL();
            db.collection('Posts').add({
                imgUrl: url,
                caption: text,
                author: currentUser.id,
            });

            history.push('/');
        }
    };

    const onMediaFileSelected = () => {
        const file = fileInput.current.files[0];

        const reader = new FileReader();
        reader.onload = e => setPreviewImgUrl(e.target.result);
        reader.readAsDataURL(file);
    };

    const handleChange = e => {
        const { value } = e.target;
        setText(value);
    };

    const handleClick = e => {
        e.preventDefault();
        fileInput.current.click();
    };

    return (
        <div className="new-post">
            <form className="new-post-form" onSubmit={handleSubmit} ref={form}>
                <button
                    onClick={handleClick}
                    className="change-new-post-image"
                >
                    Select photo
                </button>
                <input
                    type="file"
                    accept="image/*"
                    capture="camera"
                    className="image-input"
                    onChange={onMediaFileSelected}
                    ref={fileInput}
                />
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                />
                <button>
                    Add new post
                </button>
            </form>
            <div className="post-image">
                <div className="post-image-inner" style={{backgroundImage: `url(${previewImgUrl})`}}></div>
            </div>
        </div>
    );
}

export default NewPost;