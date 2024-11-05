import React from 'react';
import './ShoppingCart.css'; 

const ProductItem = ({ product, addToCart }) => (
  <div className="item">
    <img src={product.image} alt={product.name} className="item-image" />
    <h2 className="item-name">{product.name}</h2>
    <div className="price">Rs.{product.price}</div>
    
    
    <div className="item-description">
      {product.description}
    </div>

    <button className="addcart" onClick={() => addToCart(product)}>
      Add To Cart
    </button>
  </div>
);

export default ProductItem;