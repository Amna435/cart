import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    
    const addToCart = (product) => {
        const existingProduct = cartItems.find((item) => item.id === product.id);
        if (existingProduct) {
            setCartItems(cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
        setIsCartVisible(true); // Show cart when an item is added
    };

    const removeFromCart = (index) => {
        const newItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newItems);
    };

    const increaseQuantity = (index) => {
        const newItems = [...cartItems];
        newItems[index].quantity += 1;
        setCartItems(newItems);
    };

    const decreaseQuantity = (index) => {
        const newItems = [...cartItems];
        if (newItems[index].quantity > 1) {
            newItems[index].quantity -= 1;
            setCartItems(newItems);
        } else {
            removeFromCart(index);
        }
    };

    const clearCart = () => {
        setCartItems([]); // Clear cart items
    };

    // Calculate total price and total number of items
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0); // Total items count

    return (
        <div className="App">
            <Header cartItemCount={totalItems} setIsCartVisible={setIsCartVisible} />
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <>
                            <ProductList addToCart={addToCart} />
                            <Cart 
                                cartItems={cartItems}
                                total={total}
                                removeFromCart={removeFromCart}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                isCartVisible={isCartVisible}
                                setIsCartVisible={setIsCartVisible}
                            />
                        </>
                    } 
                />
                <Route 
                    path="/checkout" 
                    element={<Checkout cartItems={cartItems} total={total} clearCart={clearCart} />} 
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;