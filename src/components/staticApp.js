// src/components/App.js
import React, { useState } from 'react';
import CategoryTree from './CategoryTree';
import ProductList from './ProductList';
import Breadcrumb from './Breadcrumb';
import { categories } from '../data/categories';
import '../styles/styles.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [breadcrumbPath, setBreadcrumbPath] = useState([]);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setBreadcrumbPath([...breadcrumbPath, category]); // Add the category to the breadcrumb path
    setProducts(category.products); // Set the products for the selected category
  };

  // Handle breadcrumb click to navigate back
  const handleBreadcrumbClick = (index) => {
    const newPath = breadcrumbPath.slice(0, index + 1);
    setBreadcrumbPath(newPath);
    const selected = newPath[newPath.length - 1];

    setSelectedCategory(selected);
    setProducts(selected ? selected.products : []); // Set products for the clicked breadcrumb category
  };

  return (
    <div className="app-container">
      <div className="breadcrumb-container">
        <Breadcrumb
          breadcrumbPath={breadcrumbPath}
          onBreadcrumbClick={handleBreadcrumbClick}
        />
      </div>
      <div className="category-tree-container">
        <h2>Category Hierarchy</h2>
        <CategoryTree
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
      </div>
      <div className="product-list-container">
        <h2>Products</h2>
        {selectedCategory ? (
          <ProductList products={products} />
        ) : (
          <p>Select a category to view products</p>
        )}
      </div>
    </div>
  );
};

export default App;
