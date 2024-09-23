// src/components/App.js
import React, { useState, useEffect } from 'react';
import CategoryTree from './CategoryTree';
import ProductGrid from './ProductGrid';
import BreadCrumb from './BreadCrumb';
import '../styles/styles.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [breadcrumbPath, setBreadcrumbPath] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8081/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setBreadcrumbPath([...breadcrumbPath, category]);
  };

  const handleBreadcrumbClick = (index) => {
    const newPath = breadcrumbPath.slice(0, index + 1);
    setBreadcrumbPath(newPath);
    const selected = newPath[newPath.length - 1];
    setSelectedCategory(selected);
  };

  return (
    <div className="app-container">
      {/* <div className="breadcrumb-container">
        <BreadCrumb breadcrumbPath={breadcrumbPath} onBreadcrumbClick={handleBreadcrumbClick} />
      </div> */}
      <div className="main-container">
        <div className="category-tree-container">
          <h2>Categories</h2>
          <CategoryTree categories={categories} onCategorySelect={handleCategorySelect} />
        </div>
        <div className="product-display-container">
          <h2>Products</h2>
          {selectedCategory ? (
            <ProductGrid products={selectedCategory.products} />
          ) : (
            <p>Select a category to view products</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
