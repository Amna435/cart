import React from 'react';
import './ShoppingCart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, total, removeFromCart, increaseQuantity, decreaseQuantity, isCartVisible, setIsCartVisible }) => {
    const navigate = useNavigate();

    const onCheckout = () => {
        navigate('/checkout'); 
    };

    return (
        <div className={`cart-container ${isCartVisible ? 'visible' : ''}`}>
            <div className="cart-dropdown">
                <h2>Your Cart</h2>
                <ul>
                    {cartItems.length === 0 ? (
                        <li>Your cart is empty.</li>
                    ) : (
                        cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <div className="cart-item-content">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <span className="cart-item-name">{item.name}</span>
                                        <span className="cart-item-price">Price: Rs:{item.price.toFixed(2)}</span>
                                        <div className="quantity-controls">
                                            <button onClick={() => decreaseQuantity(index)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(index)}>+</button>
                                        </div>
                                    </div>
                                    <div className="cart-item-remove" onClick={() => removeFromCart(index)}>X</div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
                <div className="footer">
                    <h3>Total: Rs:{total.toFixed(2)}</h3>
                    <div className="footer-buttons">
                        <button onClick={onCheckout}>Checkout</button>
                        <button onClick={() => setIsCartVisible(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
