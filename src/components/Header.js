import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ cartItemCount, setIsCartVisible }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const heading = location.pathname === '/checkout' ? 'Checkout' : 'Product List';

  return (
    <header className="header">
      <h1>{heading}</h1>
      <div className="cart-icon" onClick={() => setIsCartVisible(prev => !prev)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <img 
          src="/shopping-cart.png"
          alt="Cart Icon" 
          style={{ width: '30px', height: '30px', marginRight: '5px' }} 
        />
        <span 
          className="quantity-badge" 
          style={{
            position: 'relative',
            background: '#f39c12',
            color: '#fff',
            borderRadius: '50%',
            padding: '5px 10px',
            fontSize: '14px',
            backgroundColor: '#f08080',
          }}
        >
          {cartItemCount}
        </span>
      </div>
    </header>
  );
};

export default Header;