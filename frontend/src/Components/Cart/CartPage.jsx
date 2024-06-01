import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${(item.price * item.quantity)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>

          </div>
        ))}
      </div>
      <div className="cart-footer">
          <h2>Total Amount: ${calculateTotalAmount()}</h2>
          <Link to="/checkout">
            <button className="checkout-button">Checkout</button>
          </Link>
        </div>

    </div>
  );
};

export default CartPage;