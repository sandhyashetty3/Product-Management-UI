// src/components/CategoryTree.js
import React from 'react';

const CategoryTree = ({ categories, onCategorySelect }) => {
  const renderCategory = (category) => {
    return (
      <li key={category.id}>
        <span onClick={() => onCategorySelect(category)}>{category.name}</span>
        {category.subCategories?.length > 0 && (
          <ul>{category.subCategories.map(renderCategory)}</ul>
        )}
      </li>
    );
  };

  return (
    <div className="category-tree">
      <ul>{categories.map(renderCategory)}</ul>
    </div>
  );
};

export default CategoryTree;
