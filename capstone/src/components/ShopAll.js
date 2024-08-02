import React, { useState, useEffect } from 'react';
import Product from './Product'; //Corrected path
import './ShopAll.css'; // Create and style this CSS file as needed

const ShopAll = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        // Replace this with a real API call
        fetch('/Products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching the Products:', error));
      }, []);

      return (
            <div className="Shop-All">
            {products.map(product => (
                  <Product key={product.id}
                  product={product} />

           ))}
       </div>
    );
}

export default ShopAll;

