import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../Assets/data'; 
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();

  let product = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id ===parseInt(id)) {
      product = products[i];
      break;
    }
  }
  const [quantity, setQuantity] = useState(1);


  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="product-detail">
      <img src={product.imageUrl}/>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <label>
          Quantity:
          <input  type="number" min="1" value={quantity}  onChange={(e) => setQuantity(parseInt(e.target.value))} />
        </label>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
