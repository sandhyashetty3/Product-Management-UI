import React, { useState } from 'react';

const ProductForm = ({ onSubmit, initialProduct }) => {
  const [name, setName] = useState(initialProduct ? initialProduct.name : '');
  const [description, setDescription] = useState(initialProduct ? initialProduct.description : '');
  const [price, setPrice] = useState(initialProduct ? initialProduct.price : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: initialProduct ? initialProduct.id : undefined, name, description, price });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Product Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        required 
      />
      <button type="submit">{initialProduct ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;
