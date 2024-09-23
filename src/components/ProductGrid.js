// src/components/ProductGrid.js
import React from 'react';
import '../styles/productGrid.css';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.image || 'https://via.placeholder.com/150'}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductGrid;
