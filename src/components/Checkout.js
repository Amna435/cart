import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Checkout.css';

const Checkout = ({ cartItems, total, clearCart }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        phone: '',
        country: '',
        paymentMethod: ''
    });
    const [errors, setErrors] = useState({});
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const navigate = useNavigate(); 

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required";
        else if (!/^[A-Za-z\s]+$/.test(formData.name)) newErrors.name = "Name should only contain letters";

        if (!formData.email) newErrors.email = "Email is required";
        else if (!/^.+@gmail\.com$/.test(formData.email)) newErrors.email = "Email must end with @gmail.com";

        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.zip) newErrors.zip = "Zip code is required";
        else if (!/^\d+$/.test(formData.zip)) newErrors.zip = "Zip code should contain only numbers";
        if (!formData.country) newErrors.country = "Country is required";
        if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required";

        if (!formData.phone) newErrors.phone = "Phone number is required";
        else if (!/^(\+92|03)\d{9}$/.test(formData.phone)) 
            newErrors.phone = "Phone number must start with +92 or 03 and be exactly 12 digits long";
        
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setFormData({
                name: '',
                email: '',
                address: '',
                city: '',
                zip: '',
                phone: '',
                country: '',
                paymentMethod: ''
            });
            setOrderConfirmed(true); 
            clearCart(); 
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    const handleBackToHome = () => {
        navigate('/'); 
    };

    return (
        <div className="checkout-container">
            <div className="checkout-wrapper">
                {!orderConfirmed && (
                    <div className="order-summary-container">
                        <h3>Order Summary</h3>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="order-summary-item">
                                    <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', marginRight: '10px', borderRadius: '4px' }} />
                                    <span>{item.name} - Rs.{item.price} x {item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                        <h3>Total: Rs.{total}</h3>
                    </div>
                )}

                <div className="checkout-details-container">
                    {!orderConfirmed ? (
                        <>
                            <h3>Checkout Details</h3>
                            <form onSubmit={handleSubmit} className="checkout-form">
                                
                                <div>
                                    <label>Name:</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                                    {errors.name && <span className="error">{errors.name}</span>}
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                                    {errors.email && <span className="error">{errors.email}</span>}
                                </div>
                                <div>
                                    <label>Phone Number:</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                                    {errors.phone && <span className="error">{errors.phone}</span>}
                                </div>
                                <div>
                                    <label>Country:</label>
                                    <select 
                                        name="country" 
                                        value={formData.country} 
                                        onChange={handleInputChange}
                                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                                    >
                                        <option value="">Select Country</option>
                                        <option value="Pakistan">Pakistan</option>
                                    </select>
                                    {errors.country && <span className="error">{errors.country}</span>}
                                </div>
                                <div>
                                    <label>Address:</label>
                                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
                                    {errors.address && <span className="error">{errors.address}</span>}
                                </div>
                                <div>
                                    <label>City:</label>
                                    <select 
                                        name="city" 
                                        value={formData.city} 
                                        onChange={handleInputChange}
                                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                                    >
                                        <option value="">Select City</option>
                                        <option value="Karachi">Karachi</option>
                                        <option value="Quetta">Quetta</option>
                                        <option value="Islamabad">Islamabad</option>
                                        <option value="KPK">KPK</option>
                                    </select>
                                    {errors.city && <span className="error">{errors.city}</span>}
                                </div>
                                <div>
                                    <label>Zip Code:</label>
                                    <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} />
                                    {errors.zip && <span className="error">{errors.zip}</span>}
                                </div>
                                <div>
                                    <label>Payment Method:</label>
                                    <div>
                                        <label>
                                            <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleInputChange} />
                                            Cash on Delivery (COD)
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleInputChange} />
                                            Pay by Card
                                        </label>
                                    </div>
                                    {errors.paymentMethod && <span className="error">{errors.paymentMethod}</span>}
                                </div>
                                <button type="submit">Place Order</button>
                            </form>
                        </>
                    ) : (
                        <div className="order-confirmation">
                            <h2>Thank you for your order!</h2>
                            <div className="checkmark">
                                <span style={{ fontSize: '48px', color: 'green' }}>✔️</span>
                            </div>
                            <button className="back-button" onClick={handleBackToHome}>
                                Back to Website
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;