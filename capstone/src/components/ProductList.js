import React, { useState } from'react';
import Product from './Product';
import './ProductList.css';

    const initialProducts = [
        { id: 1, name: 'The dreamy dress', price: '$29', colors: 'pink', imageUrl: 'sweetlady.jpg'},
        { id: 2, name: 'The Lovely Dress', price: '$24', colors: 'Red', imageUrl: 'ladyinred.jpg'},
        { id: 3, name: 'Item Name 3', price: '$23', colors: 'multi-color', imageUrl: 'pregnancyfeelgood.jpg'},
        { id: 4, name: 'The Tank Dress', price: '$20', colors: 'white', imageUrl: 'whitetankdress.jpg'},
        { id: 5, name: 'Off The Shoulder', price: '$43', colors: 'cream and teal', imageUrl: 'offtheshoulder.jpg'},
        { id: 6, name: 'A Day Out', price: '$28', colors: 'white', imageUrl: 'whitedress.jpg'},
        { id: 7, name: 'The Classy One', price: '$44', colors: 'cream', imageUrl: 'creamdress.jpg'},
        { id: 8, name: 'The Relaxed Dress', price: '$25', colors: 'blue', imageUrl: 'bluedress.jpg'},
        { id: 9, name: 'Sensual Love', price: '$52', colors: 'pink', imageUrl: 'pinkdress.jpg'},
        { id: 10, name: 'The Little Black Dress', price: '$38', colors: 'black', imageUrl: 'littleblackdress.jpg'},
        { id: 11, name: 'Sports Mode', price: '$25', colors: 'cream', imageUrl: 'sunshine.jpg'},
        { id: 12, name: 'Wonderer', price: '$78', colors: 'off white', imageUrl: 'formaldress.jpg'},
        // Add more products here
      ];
      
      const ProductList = () => {
        const [products, setProducts] =
        useState(initialProducts);
            const [sortOrder, setSortOrder] = useState('asc');

            const sortProducts = () => {
                console.log('Sort button clicked')
                const sortedProducts =
            [...products].sort((a, b) => {
                const priceA =
            parseFloat(a.price.replace('$', ''));
                const priceB =
            parseFloat(b.price.replace('$', ''));
                return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
            });
                setProducts(sortedProducts);
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            };
        return (
          <div>
             <button OnClick={sortProducts}>Sort by Price</button>
          <div className="products">
            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                colors={product.colors}
                imageUrl={product.imageUrl}
              />
            ))}
          </div> 
         
          </div>
        );
      };
      
      export default ProductList;
