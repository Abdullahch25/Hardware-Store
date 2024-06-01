import React from 'react';
import { Link } from 'react-router-dom';
import products from '../Assets/data'; 
import './ProductList.css';

const ListofProducts= () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt=""/>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`}>
            <button >View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListofProducts;