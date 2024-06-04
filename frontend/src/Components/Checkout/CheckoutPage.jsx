import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`
      Payment successful!
      Address: ${address}
      Email: ${email}
      Name on Card: ${cardName}
      Card Number: ${cardNumber}
      Total Amount: $${calculateTotalAmount()}
    `);
    clearCart();
    navigate('/home');
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handlePayment}>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Name on Card:
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
           <h2>Total Amount: ${calculateTotalAmount()}</h2>
        </label>
        <div className='button-container'>
        <button type="submit">Pay</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
