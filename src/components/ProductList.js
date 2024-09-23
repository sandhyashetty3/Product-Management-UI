// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductList;
