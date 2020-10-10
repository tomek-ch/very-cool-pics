import React from 'react';

import image from '../../images/feed-cropped.png';

function ProductImage() {
    return (
        <div className="product-image">
            <img src={image} alt="App screenshot" />
        </div>
    );
}

export default ProductImage;