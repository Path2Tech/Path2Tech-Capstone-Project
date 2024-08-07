import React from 'react';
import './Product.css';

const Product = ({ name, price, colors, imageUrl }) => {
    return (
        <div className="product">
            <div className="img-placeholder">
                <img src={imageUrl} alt={name} />
            </div>
        <p>{name}</p>
        <p>{price}</p>
        <p>{colors}</p>
        </div>

    );
};
export default Product;