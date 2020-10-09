import React from 'react';

import image from '../../images/app-screenshot.png';

function ProductImage() {
    return (
        <div className="product-image">
            <img src={image} alt="App screenshot" />
        </div>
    );
}

export default ProductImage;