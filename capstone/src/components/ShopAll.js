import React from 'react';
import ProductList from './ProductList'; //Corrected path
import './ShopAll.css'; // Create and style this CSS file


const ShopAll = () => {
    return (
        <div>
            <main>
                <section className="shop-all">
                    <h1>Shop All</h1>
                    <p>12 Products</p>
                    <ProductList />
                </section>
            </main>
         </div>
    );  
};

export default ShopAll;

