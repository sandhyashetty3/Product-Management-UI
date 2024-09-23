// src/components/Breadcrumb.js
import React from 'react';
import '../styles/styles.css';

const BreadCrumb = ({ breadcrumbPath, onBreadCrumbClick }) => {
  return (
    <div className="breadcrumb">
      {breadcrumbPath.map((category, index) => (
        <span key={category.id} onClick={() => onBreadCrumbClick(index)}>
          {category.name}
          {index < breadcrumbPath.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
