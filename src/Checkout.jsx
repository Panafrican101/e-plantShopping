import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './CartSlice';
import './Checkout.css';

const parseCost = (cost) => {
  if (typeof cost === 'number') return cost;
  return Number(String(cost).replace(/[^0-9.-]+/g, '')) || 0;
};

const formatMoney = (value) => value.toFixed(2);

function Checkout({ onBackToCart }) {
  const [confirmed, setConfirmed] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cart.reduce((total, item) => total + (item.price ?? parseCost(item.cost)) * item.quantity, 0);
  const shipping = cart.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    dispatch(clearCart());
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="checkout-page">
        <div className="checkout-card">
          <h2>Order Confirmed</h2>
          <p className="checkout-message">Thank you for shopping with Paradise Nursery! Your order has been placed successfully.</p>
          <div className="checkout-actions">
            <button className="checkout-button confirm" onClick={onBackToCart}>Continue Shopping</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <div className="checkout-header">
          <h2>Checkout Summary</h2>
          <p className="checkout-subtitle">Review your order before confirming your purchase.</p>
        </div>

        {cart.length === 0 ? (
          <div className="checkout-empty">
            <p>Your cart is empty. Add a few plants to complete your order.</p>
          </div>
        ) : (
          <div className="checkout-items">
            {cart.map((item) => (
              <div className="checkout-item" key={item.name}>
                <img className="checkout-item-image" src={item.image} alt={item.name} />
                <div className="checkout-item-info">
                  <div className="checkout-item-name">{item.name}</div>
                  <div className="checkout-item-meta">{item.quantity} × {item.cost || `$${(item.price ?? 0).toFixed(2)}`}</div>
                </div>
                <div className="checkout-item-total">${formatMoney(parseCost(item.cost) * item.quantity)}</div>
              </div>
            ))}
          </div>
        )}

        <div className="checkout-summary">
          <div className="checkout-summary-row">
            <span>Subtotal</span>
            <span>${formatMoney(subtotal)}</span>
          </div>
          <div className="checkout-summary-row">
            <span>Shipping</span>
            <span>${formatMoney(shipping)}</span>
          </div>
          <div className="checkout-summary-row total">
            <span>Total</span>
            <span>${formatMoney(total)}</span>
          </div>
        </div>

        <div className="checkout-actions">
          <button className="checkout-button return" onClick={onBackToCart}>Back to Cart</button>
          <button
            className="checkout-button confirm"
            onClick={handleConfirmOrder}
            disabled={cart.length === 0}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
