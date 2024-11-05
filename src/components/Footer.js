import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <h3>About Us</h3>
                <p>We provide the best collection of books at affordable prices. Explore a variety of genres and enjoy a seamless shopping experience.</p>
            </div>
            <div className="footer-section">
                <h3>Quick Links</h3>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
            </div>
            <div className="footer-section">
                <h3>Follow Us</h3>
                <div className="footer-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
                    <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
                    <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
                </div>
            </div>
            <div className="footer-section">
                <h3>Subscribe</h3>
                <p>Get the latest updates and offers.</p>
                <div className="footer-input">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;