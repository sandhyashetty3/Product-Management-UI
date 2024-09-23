import React, { useState } from 'react';

const CategoryForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Category Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
